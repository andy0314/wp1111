import mongoose, { Schema } from 'mongoose'

const CourseSchema = new Schema({
    semester: String,
    course_id: String, //流水號
    course_name: String, //課程名稱
    course_id_: String, //識別碼
    department: Array, //授課對象
    course_code: String, //課號
    class_id: String, //班次
    teacher: String, //教師
    half_year: Boolean, //全年
    course_type: String, //必選修
    credit: Number, //學分
    method: String, //加簽
    field: String, //領域專長
    max_student: String, //人數上限
    time_place: String, //時間地點
    limit: String, //修課限制
    note: String, //備註

    time_for_filter: Array,
    general: Array,
})

const Course = mongoose.model('course', CourseSchema);

export default Course;