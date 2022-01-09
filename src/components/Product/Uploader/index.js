import React, { useEffect, useState } from 'react';
import { Modal, notification, Progress, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const ImageUploader = ({ onUploaded, url }) => {
  const [previewImage, setPreviewImage] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    if (url) {
      setFileList([{ uid: '-1', url: url, thumbUrl: url, status: 'success' }]);
    }
  }, [url]);

  const handleCancel = () => setPreviewVisible(false);

  const handleRemove = () => {
    setFileList([]);
    onUploaded(null);
  };

  const handlePreview = file => {
    setPreviewImage(file.thumbUrl);
    setPreviewVisible(true);
  };

  const handleUpload = ({ fileList }) => {
    setFileList(fileList);
  };

  const checkFileSize = file => {
    if (file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        notification.error({ message: 'Image must be smaller than 2MB!' });
      }
      return isLt2M ? true : Upload.LIST_IGNORE;
    }
    return Upload.LIST_IGNORE;
  };

  const uploadFiles = options => {
    console.log({ options });
  };

  return (
    <div>
      <Upload
        accept="image/*"
        listType="picture-card"
        multiple={false}
        maxCount={1}
        fileList={fileList}
        onRemove={handleRemove}
        onPreview={handlePreview}
        onChange={handleUpload}
        beforeUpload={checkFileSize}
        customRequest={uploadFiles}>
        {fileList.length < 1 && <UploadOutlined />}
      </Upload>
      {progressVisible && <Progress percent={progress} />}
      <Modal centered width={400} visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default ImageUploader;
