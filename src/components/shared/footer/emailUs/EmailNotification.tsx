export const notifyCompany = (name: string, email: string, cp: string, message: string) => {
    const dateNow = Date().toString();
    return `
        <div>
            <p>
                <strong>
                    <em>
                        ***This is autogenerated email,please don't reply***
                    </em>
                </strong>
            </p>
            <div>Good day,</div>
            <p>
                Someone get intouch with you last <em>${dateNow}</em>.
                Please answer his/her inquiry as soon as possible through details below:
            </p>

            <h3>Customer Information</h3>
            <table border=1 style="width: 500px">
                <tr>
                    <td>
                        <strong>Name</strong>
                    </td>
                    <td>
                        ${name}
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Email</strong>
                    </td>
                    <td>
                        ${email}
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Mobile Number</strong>
                    </td>
                    <td>
                        ${cp}
                    </td>
                </tr>
                <tr>
                    <td colspan=2>
                        <strong style="color;red">Inquiry:</strong>
                        <p>
                            <em>
                                ${message}
                            </em>
                        </p>
                    </td>
                </tr>
            </table>

            <p>
                <h4>Vivid Travel & Tours</h4>
                <h5>Sent via Website</h5>
            </p>
        </div>
    `;
}