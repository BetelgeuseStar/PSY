const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const mailService = require(".//mailService");
const tokenService = require(".//tokenService");
const UserDto = require("../dtos/userDto");
const ApiError = require("../exeptions/apiError");

class UserService {
  async registration(email, password) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${email} уже существует`,
      );
    }
    const uuid = await import("uuid");
    const activationLink = uuid.v4();

    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({
      email,
      password: hashPassword,
      activationLink,
    });

    await mailService.sendActivationEmail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`,
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    console.log(user);
    if (!user) {
      throw ApiError.BadRequest(`Пользователь с таким email не найден`);
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest(`Неверный пароль`);
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    return await tokenService.removeToken(refreshToken);
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw new ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw new ApiError.UnauthorizedError();
    }

    const user = await User.findOne({ where: { id: userData.id } });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    const user = await User.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Некорректная ссылка активации");
    }
    user.isActivated = true;
    await user.save();
  }

  async getAllUsers() {
    return await User.findAll();
  }
}

module.exports = new UserService();
