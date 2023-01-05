import { Select } from "antd";
import { useFilter } from "../containers/hooks/useFilter";

const GeneralEducationSelect = () => {
    const options = [
        {
            value: 1,
            label: 'A1'
        },
        {
            value: 2,
            label: 'A2'
        },
        {
            value: 3,
            label: 'A3'
        },
        {
            value: 4,
            label: 'A4'
        },
        {
            value: 5,
            label: 'A5'
        },
        {
            value: 6,
            label: 'A6'
        },
        {
            value: 7,
            label: 'A7'
        },
        {
            value: 8,
            label: 'A8'
        },
    ]

    const { generalFilter, setGeneralFilter } = useFilter();
    const handleChange = (value) => {
        value.sort()
        setGeneralFilter(value)
    }

    return(
    <>
        <Select
            mode="multiple"
            style={{width: '100%'}}
            value={generalFilter}
            onChange={handleChange}
            options={options}
            allowClear={true}
        />
    </>
    )
}

export default GeneralEducationSelect