export default function LoginPage() {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-600">
            <div className="w-[400px]">
                <div>logo</div>
                <div className="shadow-lg rounded-md p-6 bg-white">
                    <div>
                        <form>
                            <p>Login with email</p>
                            <div className="mb-2">
                                <input type="text" placeholder="enter your email" className="p-1 w-full border border-gray-700 rounded-lg" />
                            </div>
                            <div className="mb-2">
                                <input type="text" placeholder="enter your password" className="p-1 w-full border border-gray-700 rounded-lg" />
                            </div>
                            <div>
                                <button>login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}