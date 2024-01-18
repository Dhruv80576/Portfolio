import Button from "../components/button";

const Contact = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center overflow-x-hidden">
            <div className="mt-[15%] flex flex-col justify-start items-start">
                <div className="text-4xl font-bold mb-[10%] self-center">Thank You</div>
                <div className="text-xs mb-3">Feel free to contact me for any queries and projects.</div>
                <div className="text-xl ">+91 7817054800</div>
                <div className="text-xl ">agarwaldhruv8057@gmail.com</div>
                <div className=""></div>
                <div className="flex flex-row mt-[10%] justify-center self-center">
                    <Button url={'https://www.linkedin.com/in/dhruv-agrawal-59ab4817b/'} image={'/images/linkedin.png'} />
                    <Button url={''} image={'/images/instagram.png'} />
                    <Button url={'https://mail.google.com/mail/?view=cm&fs=1&to=agarwaldhruv8057@gmail.com'} image={'/images/gmail.png'} />
                    <Button url={''} image={'/images/discord.png'} />

                </div>
            </div>
        </div>
    );
}

export default Contact;