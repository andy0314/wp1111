import React from 'react'
import { Button, Space, Form, Input } from 'antd'

const SignUp = ({ onSignUp, me, setName, password, setPassword, setSignUp }) => {
    const [form] = Form.useForm()

    return (
        <>
        <h1 style={{display: 'flex', justifyContent: 'center', position: 'relative', fontSize: '3em',}}>Sign up</h1>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative',}}>
        <Form
            form={form}
            name="create"
            labelCol={{ span: 8, }}
            wrapperCol={{ sapn: 16, }}
            initialValues={{ remember: true, }}
            autoComplete="off"
            style={{ width: '300px', position: 'absolute', top: '40%',}}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please type your username in.'
                    },
                ]}
            >
                <Input value={me} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password.',
                    },
                ]}
            >
                <Input.Password
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </Form.Item>
            <Space.Compact
                block
                style={{ display: 'flex', flexDirection: 'column' }}
            >
            <Button
                    type="primary"
                    onClick={() => {
                        onSignUp(me, password)
                        setPassword('')
                        form.resetFields()
                    }}
                >
                Submit
            </Button>
            <Button
                    type="link"
                    onClick={() => {
                        setPassword('')
                        setName('')
                        form.resetFields()
                        setSignUp(false)
                    }}
                >
                Already have an account
            </Button>
            </Space.Compact>
        </Form>
        </div>
        </>
    )
}

export default SignUp