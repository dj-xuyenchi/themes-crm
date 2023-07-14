/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSS } from '@dnd-kit/utilities';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { Row, Col } from 'antd';
import NoteCard from '../../../components/note/Card';
import { noteDragData } from '../../../redux/note/actionCreator';

function SortableItem(value) {
  const item = value.value;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Col xxl={8} xl={12} lg={12} sm={12} xs={24}>
      <div style={style}>
        <NoteCard data={item} listeners={listeners} setNodeRef={setNodeRef} {...attributes} />
      </div>
    </Col>
  );
}

function Social() {
  const dispatch = useDispatch();
  const { noteData } = useSelector((state) => {
    return {
      noteData: state.Note.data,
    };
  });

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const activeIndex = noteData.indexOf(active.id);
      const overIndex = noteData.indexOf(over.id);
      dispatch(noteDragData(arrayMove(noteData, activeIndex, overIndex)));
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="h-full bg-white dark:bg-white10 m-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative">
        <div className="text-dark dark:text-white87 flex flex-wrap items-center justify-between gap-[15px] sm:justify-center py-[18px] mb-0 border-b border-regular dark:border-whiteDark">
          <h1 className="px-[25px] mb-0 inline-block overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold sm:text-center">
            Important
          </h1>
        </div>
        <div className="p-[25px] sm:p-[15px]">
          <Row gutter={24}>
            <SortableContext items={noteData} strategy={rectSortingStrategy}>
              {noteData
                .filter((item) => item.label === 'social')
                .map((value, index) => (
                  <SortableItem key={value.key} index={index} value={value} />
                ))}
            </SortableContext>
          </Row>
        </div>
      </div>
    </DndContext>
  );
}

export default Social;
