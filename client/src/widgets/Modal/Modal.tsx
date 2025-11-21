import { useEffect, useState } from "react";
import { Button, Modal as AntModal } from "antd";

export type ModalProps = {
  isOpen: boolean;
};

export function Modal({ isOpen }: ModalProps) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <AntModal
      open={open}
      title="Title"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Submit
        </Button>,
        <Button
          key="link"
          target="_blank"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Search on Google
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </AntModal>
  );
}
