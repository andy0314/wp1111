import { Button, Space, Form, Input } from 'antd'

const Login = ({ onSignIn, me, setName, password, setPassword, setSignUp }) => {
    const [form] = Form.useForm()

    return (
        <>        
        <h1 style={{display: 'flex', justifyContent: 'center', position: 'relative', fontSize: '3em',}}>Login</h1>
        <div style={{display: 'flex', justifyContent: 'center', position: 'relative',}}>
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
                        onSignIn(me, password)
                        setPassword('')
                        form.resetFields()
                    }}
                >
                Login
            </Button>
            <Button
                    type="link"
                    onClick={() => {
                        setPassword('')
                        setName('')
                        form.resetFields()
                        setSignUp(true)
                    }}
                >
                Sign up
            </Button>
            </Space.Compact>
        </Form>
        </div>
        </>
    )
}

export default Login