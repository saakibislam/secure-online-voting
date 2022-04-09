import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import regForm from '../../regForm.pdf';

const Registration = () => {
    return (
        <Container className='mt-3'>
            <div>
                <h2>Registration Process</h2>
                <p className='text-start lh-lg'>নতুন ভোটার নিবন্ধন: ভোটার তালিকা হালনাগাদ একটি চলমান প্রক্রিয়া। ২০১৫ সালের জন্য, আপনি যদি একজন বাংলাদেশী নাগরিক হন, প্রায়শই একটি এলাকায় থাকতেন এবং ১লা জানুয়ারী ২০১৬ এর আগে আপনার বয়স ১৮ বা তার বেশি কিন্তু এখনও ভোটার হিসাবে নিবন্ধিত হননি, আপনি একজন ভোটার হিসাবে নিবন্ধন করতে পারেন৷ এছাড়া, সেই নাগরিক যিনি ২য় থেকে জন্মগ্রহণ করেছেন জানুয়ারী ১৯৯৭ থেকে ১লা জানুয়ারী ২০০০ রেজিস্ট্রেশন করতে পারেন তবে ১৮ বছর না হওয়া পর্যন্ত তাদের ভোটার হিসাবে গণ্য করা হবে না। তালিকাভুক্তির সময় আপনার ফর্ম-2-এর জন্য কিছু কাগজপত্রের প্রয়োজন হয় যেমন,</p>
                <ol className='text-start'>
                    <li>এস. এস. সি. বা সমমানের সার্টিফিকেট</li>
                    <li>জন্ম সনদ</li>
                    <li>পাসপোর্ট/ড্রাইভিং লাইসেন্স/টিআইএন সার্টিফিকেট</li>
                    <li>ইউটিলিটি বিলের কপি/বাড়ি ভাড়ার রসিদ/হোল্ডিং ট্যাক্সের রসিদ - (ঠিকানার প্রমাণ হিসেবে)</li>
                    <li>নাগরিকত্ব শংসাপত্র (প্রযোজ্য হিসাবে)</li>
                    <li>বাবা, মা, স্বামী/স্ত্রীর আইডি কার্ডের ফটোকপি।</li>
                </ol>
                <ul className='text-start my-3'>
                    <h5 className='text-decoration-underline fw-bold my-3'>তথ্য সংগ্রহ</h5>
                    <li>ভোটারের কেন্দ্রে আগমন ও দায়িত্বপ্রাপ্ত ব্যক্তিকে স্লিপ হস্তান্তর।</li>
                    <li>ফরম সংগ্রহকরণ ও ডাটা এন্ট্রি অপারেটরের নিকট গমণ।</li>
                    <li>কেন্দ্রে অবস্থিত যাচাইকারী কর্তৃক ভোটারকে চিহ্নিত করণ।</li>
                    <li>ডাটা এন্ট্রি অপারেটর কর্তৃক তথ্যাদি, ল্যাপটপে ধারণ (যদি আগে থেকে এন্ট্রি না করা থাকে)।
                    </li>
                    <li>ছবি, আংগুলের ছাপ, স্বাক্ষর গ্রহণ এবং প্রাপ্তি রশিদ হস্তান্তর</li>
                    <li>কোন এন্ট্রি বাকি থাকলে বাকি এন্ট্রি ডাটা এন্ট্রি অপারেটর কর্তৃক পূরণ।</li>
                </ul>
                <Link
                    to={regForm}
                    target="_blank"
                    download
                >
                    <Button variant='success'>ফরমের নমুনা (বাংলা)</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Registration;