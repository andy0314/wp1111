import '../css/List.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "../api"
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useState } from 'react';
import { SortableItem } from './SortableItem';
import { useData } from './hooks/useContext';

const CourseList = () => {
  const { sortCourse, setSortCourse, myCourse, setMyCourse, me } = useData();
    const handleRemoveItem = (e) => {
      console.log(e)
      let nSC = sortCourse.filter(course => course._id !== e)
      setSortCourse(nSC);
    };
    const ifSame = () => {
      let insame = false
      if(sortCourse.length !== myCourse.length){insame = true}
      if(!insame){
        sortCourse.map((cor, key) => {
          if(cor._id !== myCourse[key]._id){ 
            insame = true;

          }
        })
      }
      if(insame){
        return false
      }
      else return true
    }
    const handleSave = async () => {
      const same = ifSame()
      if(!same){
        const { data: { messages, data } } = await api.post('/course/store',{
          name: me,
          course_array: sortCourse
      });
        setMyCourse(sortCourse)
      }
    }
  return ( 
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
            <Container className="p-3" style={{width: "100%", minWidth: '1200px', position: "relative"}} align="center">
                <SortableContext
                items={sortCourse}
                strategy={verticalListSortingStrategy}
                >
                {sortCourse.map((course, index) => <SortableItem key={course._id} id={course} index={index+1} handleRemoveItem={handleRemoveItem} />)}
                </SortableContext>
                <div class="fix" style={{left: '90%'}}>
                    <button style={{backgroundColor: 'aquamarine', border: '0px', borderRadius: '10px'}} onClick={handleSave}>
                      <h3 style={{color: 'white' }}>Save</h3>
                    </button>
                </div>
                <div class="fix" style={{left: '10%'}}>
                      <h3>Course : {sortCourse.length}</h3>
                </div>
            </Container>
        </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);
    console.log(active)

    if(active.id !== over.id) {
      setSortCourse((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
        
      });
      
    }
  }
}

export default CourseList;
