import { Divider, Modal, Row } from "antd";
import { useData } from "../containers/hooks/useContext";

import DepartmentSelect from "./DepartmentSelect";
import GeneralEducationSelect from "./GeneralEducationSelect";
import TimeSelect from "./TimeSelect";

const SearchFilterModal = () =>{
    const{ searchModalOpen, setSearchModalOpen } = useData();
    return(
        <Modal
            open={searchModalOpen}
            title="設定篩選條件"
            footer={null}
            onCancel={() => setSearchModalOpen(false)}
        >
            <Divider>選擇時段</Divider>
            <TimeSelect />
            <Divider>選擇系所</Divider>
            <DepartmentSelect />
            <Divider>通識</Divider>
            <GeneralEducationSelect />
        </Modal>
    )
}

export default SearchFilterModal;