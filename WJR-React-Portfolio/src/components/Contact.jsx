function Contact() {
    return (
        <>
            <h1 className="text-center">Contact Me</h1>

            <form>
                <input type="text" placeholder="Enter your Name" />
                <input type="email" placeholder="Enter your email" />
                <textarea cols="30" rows="10" placeholder="Enter you message"></textarea>
                <button>Send</button>
            </form>
        </>
    )
}

export default Contact