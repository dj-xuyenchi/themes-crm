import { Radio } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { DrawerStyle } from './style';
import { Button } from '../buttons/buttons';

const RadioGroup = Radio.Group;

function Drawer(props) {
  const { width, title, placement, children, customPlacement, render, childDrawer, childTitle, btnText } = props;
  const [state, setState] = useState({
    open: false,
    placement: placement || 'right',
    childrenDrawer: false,
  });

  const showDrawer = () => {
    setState({
      ...state,
      open: true,
    });
  };

  const onClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const onChange = (e) => {
    setState({
      ...state,
      placement: e.target.value,
    });
  };

  const showChildrenDrawer = () => {
    setState({
      ...state,
      childrenDrawer: true,
    });
  };

  const onChildrenDrawerClose = () => {
    setState({
      ...state,
      childrenDrawer: false,
    });
  };

  return (
    <>
      {customPlacement && (
        <RadioGroup style={{ marginRight: 8 }} defaultValue={placement} onChange={onChange}>
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </RadioGroup>
      )}

      {render && <p>Render in this</p>}
      <Button
        className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
        type="primary"
        size="default"
        onClick={showDrawer}
        raised
      >
        {btnText}
      </Button>
      <DrawerStyle
        title={title}
        placement={state.placement}
        closable={false}
        onClose={onClose}
        open={state.open}
        getContainer={false}
        style={{ position: !render ? 'fixed' : 'absolute' }}
        width={width}
      >
        {!childDrawer ? (
          children
        ) : (
          <>
            <Button className="mb-[15px]" type="primary" onClick={showChildrenDrawer}>
              Two-level drawer
            </Button>

            <DrawerStyle
              title={childTitle}
              width={width}
              closable={false}
              onClose={onChildrenDrawerClose}
              open={state.childrenDrawer}
            >
              {childDrawer}
            </DrawerStyle>
            {children}

            <div
              className="bg-white dark:bg-white10 dark:border-white10"
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e8e8e8',
                padding: '10px 16px',
                textAlign: 'right',
                left: 0,
                borderRadius: '0 0 4px 4px',
              }}
            >
              <Button
                className=" dark:bg-transparent dark:border-white10 dark:text-white87"
                style={{
                  marginRight: 8,
                }}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </div>
          </>
        )}
      </DrawerStyle>
    </>
  );
}

Drawer.defaultProps = {
  btnText: 'Open',
  width: 320,
};

Drawer.propTypes = {
  title: PropTypes.string,
  placement: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node, PropTypes.array]),
  customPlacement: PropTypes.bool,
  render: PropTypes.bool,
  childDrawer: PropTypes.object,
  childTitle: PropTypes.string,
  btnText: PropTypes.string,
  width: PropTypes.number,
};

export { Drawer };
