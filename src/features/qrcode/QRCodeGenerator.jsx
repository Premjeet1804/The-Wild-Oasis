import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { CiUser } from "react-icons/ci";

const QRCodeGenerator = () => {
    const [members, setMembers] = useState([{ name: '', aadharNo: '', mobileNo: '' }]);
    const [qrCodeValue, setQRCodeValue] = useState('');

    const handleNameChange = (event, index) => {
        const newMembers = [...members];
        newMembers[index].name = event.target.value;
        setMembers(newMembers);
    };

    const handleAadharNoChange = (event, index) => {
        const newMembers = [...members];
        newMembers[index].aadharNo = event.target.value;
        setMembers(newMembers);
    };

    const handleMobileNoChange = (event, index) => {
        const newMembers = [...members];
        newMembers[index].mobileNo = event.target.value;
        setMembers(newMembers);
    };

    const addMember = () => {
        setMembers([...members, { name: '', aadharNo: '', mobileNo: '' }]);
    };

    const removeMember = (index) => {
        const newMembers = [...members];
        newMembers.splice(index, 1);
        setMembers(newMembers);
    };

    const generateQRCode = () => {
        const userInfo = members.map(member => {
            return `Name: ${member.name}, Aadhar No: ${member.aadharNo}, Mobile No: ${member.mobileNo}`;
        }).join('\n');
        setQRCodeValue(userInfo);
    };

    const resetForm = () => {
        setMembers([{ name: '', aadharNo: '', mobileNo: '' }]);
        setQRCodeValue('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        generateQRCode();
    };

    const Label = styled.span`
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: 500;
        margin-left: 20px;

        & svg {
            width: 2rem;
            height: 2rem;
            color: var(--color-brand-600);
        }
    `;

    return (
        <div style={{ textAlign: 'center' }}>
            <Form onSubmit={handleSubmit}>
                <h1>User QR Code Generator</h1>
                {members.map((member, index) => (
                    <div style={{"marginBottom":"1.5rem"}} key={index}>
                        <Label>
                            {<CiUser />}
                            <span>{`Member ${index + 1}`}</span>
                        </Label>
                        <FormRow label='Name'>
                            <Input
                                id={`Name${index + 1}`}
                                type="text"
                                placeholder='Name'
                                value={member.name}
                                onChange={(event) => handleNameChange(event, index)}
                                required
                            />
                        </FormRow>
                        <FormRow label='Aadhar No.'>
                            <Input
                                id={`Aadhar_No${index + 1}`}
                                type="text"
                                placeholder='Aadhar No.'
                                value={member.aadharNo}
                                onChange={(event) => handleAadharNoChange(event, index)}
                                pattern="[0-9]{12}"
                                maxLength="12"
                                required
                            />
                        </FormRow>
                        <FormRow label='Mobile No.'>
                            <Input
                                id={`MobileNo${index + 1}`}
                                type="text"
                                placeholder='Mobile No.'
                                value={member.mobileNo}
                                onChange={(event) => handleMobileNoChange(event, index)}
                                pattern="[0-9]{10}"
                                maxLength="10"
                                required
                            />
                        </FormRow>
                        <Button type="button" onClick={() => removeMember(index)} size="small" variation="danger">Remove</Button>
                    </div>
                ))}
                <FormRow>
                    <Button type="button" onClick={addMember} size="small">Add Member</Button>
                    <Button type="submit" size="small">Generate QR Code</Button>
                    <Button type="button" onClick={resetForm} size="small" variation="secondary">Reset Form</Button>
                </FormRow>
            {qrCodeValue && (
                <div>
                    <h2>QR Code:</h2>
                    <QRCode value={qrCodeValue} />
                </div>
            )}
            </Form>
        </div>
    );
};

export default QRCodeGenerator;
