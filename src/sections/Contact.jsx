import React from 'react';

export default function CommentForm() {
    return (
        <div id="contact" className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold text-center mb-6">Leave a Comment</h2>

            <form className="space-y-4">
                {/* Comment Box */}
                <textarea
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[150px]"
                    placeholder="Write your comment here..."
                    required
                />

                {/* Name Input */}
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Name *"
                    required
                />

                {/* Email Input */}
                <input
                    type="email"
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Email *"
                    required
                />

                {/* Website Input (Optional) */}
                <input
                    type="url"
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Website"
                />

                {/* Save Info Checkbox */}
                <div className="flex items-center space-x-2">
                    <input
                        id="saveInfo"
                        type="checkbox"
                        className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="saveInfo" className="text-sm text-gray-600">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition-colors"
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
}
