import React from 'react';
import classNames from 'classnames';

export default function Write() {
  return (
    <div className="write">
      <img
        className={classNames('writeImg', 'ml-32', 'w-10/12', 'h-64', 'rounded-lg', 'object-cover')}
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className={classNames('writeFormGroup', 'ml-32', 'flex', 'items-center')}>
          <label htmlFor="fileInput">
            <i className={classNames('writeIcon', 'fas', 'fa-plus')}></i>
          </label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />
          <input
            className={classNames('writeInput', 'text-3xl', 'placeholder-gray-500')}
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className={classNames('writeFormGroup', 'ml-32')}>
          <textarea
            className={classNames('writeInput', 'writeText', 'text-base')}
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className={classNames('writeSubmit', 'absolute', 'top-4', 'right-10')}>
          Publish
        </button>
      </form>
    </div>
  );
}
