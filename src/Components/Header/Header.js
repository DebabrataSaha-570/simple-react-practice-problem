import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header text-white '>
            <div >
            <h2>About</h2>
            <h2>Programming Hero</h2>
            <p className='col-md-5 mx-auto'>আমরা প্রোগ্রামিং হিরো হতে পারি বা না পারি, আমাদের উদ্দেশ্য হচ্ছে যারা সিরিয়াসলি প্রোগ্রামিং হিরো হতে চায় তাদের হেল্প করা। তাদের লার্নিং প্রসেসকে এঞ্জয়েবল এবং এফেক্টিভ করে তোলা। এই প্রচেষ্টায় আমরা নিত্য নতুন জিনিস শিখছি, চেষ্টা করছি।</p>
            </div>
        </div>
    );
};

export default Header;