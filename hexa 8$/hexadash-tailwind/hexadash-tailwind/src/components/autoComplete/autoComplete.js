import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { AutoCompleteStyled } from '../../container/styled';

const onSelect = () => {
  // console.log('onSelect', value);
};

const renderItem = (title, count) => {
  return {
    value: title,
    label: (
      <div
        className="text-dark dark:text-white dark:text-white60"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        {count}
      </div>
    ),
  };
};

const AutoComplete = React.memo((props) => {
  const { rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  const { customComponent, patterns, patternButtons, width, onSearch, options, placeholder } = props;

  const content =
    options?.length > 0 &&
    options.map((group) => {
      const { title, count } = group;
      return {
        label: title,
        options: [renderItem(title, <span className="">{count} people</span>)],
      };
    });

  const onSearching = (searchText) => {
    onSearch(searchText);
  };

  return customComponent ? (
    <AutoCompleteStyled options={options} style={{ width }} onSelect={onSelect} onSearch={onSearching}>
      {customComponent}
    </AutoCompleteStyled>
  ) : patterns ? (
    <AutoCompleteStyled
      className="sm:w-full [&>.ant-select-selector]:rounded-[100px]"
      dropdownClassName=""
      dropdownMatchSelectWidth={false}
      dropdownStyle={{ width: 300 }}
      style={{ width }}
      options={content}
      placeholder={placeholder}
      onSearch={onSearching}
    >
      <Input
        className="bg-transparent px-5 border border-regular dark:border-white10 shadow-none rounded-[100px] [&>input]:!bg-transparent dark:[&>input]:!bg-transparent h-[38px]"
        suffix={
          patternButtons ? (
            <Button
              className="h-[38px] rounded-tl-none rounded-bl-none"
              style={{ [rtl ? 'marginLeft' : 'marginRight']: -20 }}
              type="primary"
            >
              <SearchOutlined className="flex text-light dark:text-white87 [&>svg]:text-light dark:[&>svg]:text-white87" />
            </Button>
          ) : (
            <SearchOutlined className="flex text-light dark:text-white87 [&>svg]:text-light dark:[&>svg]:text-white87" />
          )
        }
      />
    </AutoCompleteStyled>
  ) : (
    <AutoCompleteStyled
      options={options}
      style={{ width }}
      onSelect={onSelect}
      onSearch={onSearching}
      placeholder={placeholder}
    />
  );
});

AutoComplete.defaultProps = {
  width: '200px',
  placeholder: 'Input here',
};

AutoComplete.propTypes = {
  customComponent: PropTypes.node,
  patterns: PropTypes.bool,
  patternButtons: PropTypes.bool,
  width: PropTypes.string,
  onSearch: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
};

export { AutoComplete };
