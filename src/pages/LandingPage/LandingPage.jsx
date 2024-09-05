import React from 'react';
import Modal from 'components/Modal/Modal';
import { HiX } from 'react-icons/hi';

export default function LandingPage() {
  return (
    <>
      <h1 className="page-title">University Information</h1>
      <Modal header={{ icon: <HiX />, label: 'University Info' }}>
        <p>This is the content inside the modal. It will always be visible.</p>
      </Modal>
    </>
  );
}
