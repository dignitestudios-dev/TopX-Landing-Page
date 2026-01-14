"use client";
import { useState } from "react";
// import { X, Copy, Check } from "lucide-react";
import Modal from "react-modal";
export default function GenerateLink({ isOpen, onRequestClose }) {
    const [copied, setCopied] = useState(false);
    const inviteLink = "https://www.my-topx.com/invite/alex-smith";

    const handleCopy = () => {
      navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
        <Modal 
        isOpen={isOpen}
        onClose={() => onRequestClose(false)}
        overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
        className=" rounded-2xl shadow-xl w-full  p-6 outline-none relative"
      >
        <div>
          
    <div className="min-h-screen     flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
        {/* Close Button */}
        <button onClick={() => onRequestClose(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors">
        X
        </button>

        {/* Heading */}
        <h1 className="text-[20px] font-[600] text-gray-900 mb-6">
         Your personal referral link is ready!
        </h1>

        {/* Description */}
        <p className="text-[16px] font-[400] text-gray-700  mb-8">
      Save this link for now. Once the app goes live, you can start sharing it with friends. Every person who joins using your link will be counted as your referral, and you’ll earn rewards such as sixer tickets or other prizes for each successful referral.
        </p>

        {/* Link Box */}
        <div className="bg-gray-100 rounded-xl p-4 mb-6">
          <p className="text-[#181818CC] text-[16px] font-[400] ">
            {inviteLink}
          </p>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="w-[343px] mx-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold text-[14px] h-[48px] rounded-[12px] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
        >
          {copied ? (
            <>
             
              Copied!
            </>
          ) : (
            <>
             
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
    </div>
    </Modal>
  );
}
        