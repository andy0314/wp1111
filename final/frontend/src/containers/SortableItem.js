import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Card } from 'antd';
import '../css/List.css'
import { MinusCircleOutlined } from '@ant-design/icons'

const IndexStyle = {
    display: 'flex',
    textAlign: 'center',
    width: '7%',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };
const gridStyle = {
    display: 'flex',
    textAlign: 'start',
    width: '36%',
    padding: '12px',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
  };
  const teacherStyle = {
    display: 'flex',
    textAlign: 'start',
    width: '21%',
    padding: '12px',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
  };
  const spaceStyle = {
    minHeight: '60px',
    width: '900px',
  }
export function SortableItem(props) {
    
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div className="C_L_Adjust">
            <div className="leftAdjust"></div>
            <div>
                <Button style={{height: '50px', width: '50px', top: '10px', borderRadius: '50%',  background: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center'}}onClick={()=>props.handleRemoveItem(props.id._id)}>
                    <MinusCircleOutlined style={{color: "white", fontSize:'32px'}}/>
                </Button>
            </div>
            <div style={{margin: '5px'}}>
                <div ref={setNodeRef} style={style}  {...attributes} {...listeners}>
                    <Card bodyStyle={spaceStyle} hoverable={true}>
                        <Card.Grid style={IndexStyle} hoverable={false}><h2>{props.index}</h2></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h5>{props.id.course_name}</h5></Card.Grid>
                        <Card.Grid style={teacherStyle} hoverable={false}><h5>授課教師 : {props.id.teacher}</h5></Card.Grid>
                        <Card.Grid style={gridStyle} hoverable={false}><h5>{props.id.time_place}</h5></Card.Grid>
                    </Card>
                </div>
            </div>
            <div className="rightAdjust"></div>
        </div>
    )
}