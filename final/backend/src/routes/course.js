import { Router } from "express";
import Course from "../models/course";
import UserModel from '../models/user'

const router = Router()

router.post('/course', async (req, res) => {
    const { name } = req.body
    const user = await UserModel.findOne({ name })
    if(!user){
        console.log("NoUser", name)
        res.status(200).json({ messages: "NoUser", data: name })
    }
    else {
        const popedUser = await user.populate([{ path: 'courses', model: 'course', select: ['course_name', 'teacher', 'time_place', 'time_for_filter', 'course_id', 'semester']}])
        res.status(200).json({ messages: "gotCourses", data: popedUser.courses })
    }
})
router.post("/store", async (req, res) => {
    const { name, course_array } = req.body
    const user = await UserModel.findOne({ name })
    if(!user){
        console.log("NoUser", name)
        res.status(200).json({ messages: "NoUser", data: name })
    }
    else {
        console.log("store/course_array", course_array)
        let nCourse = []
        course_array.map((cors, key) => {
            nCourse.push(cors._id)
        })
        console.log("store/nCourse", nCourse)
        const Nuser = await UserModel.findOneAndUpdate({ name: user.name }, { courses: nCourse }, {
            new: true,
        })
        console.log("Nuser", Nuser)
        const PNuser = await Nuser.populate([{ path: 'courses', model: 'course', select: ['course_name', 'teacher', 'time_place', 'time_for_filter']}])
        res.status(200).json({ messages: "gotCourses", data: PNuser.courses })
    }
})
router.post('/addcourse', async (req, res) => {
    const { name, courseid } = req.body
    const user = await UserModel.findOne({ name })
    if(!user){
        console.log("NoUser", name)
        res.status(200).json({ messages: "NoUser", data: name })
    }
    else {
        const found = user.courses.find(element => element === courseid)
        if(!found){
            console.log(user.courses);
            console.log(courseid)
            const ncourses = [...user.courses, courseid]
            console.log("ncourses", ncourses)
            let upuser = await UserModel.findOneAndUpdate({ name: name }, {courses: ncourses}, {new: true})
            console.log("upuser.courses", upuser.courses)
            res.status(200).json({ messages: "AddCourses", data: ""})
        }
        else  res.status(200).json({ messages: "AlreadyAdded", data: ""})
    }
})
export default router;