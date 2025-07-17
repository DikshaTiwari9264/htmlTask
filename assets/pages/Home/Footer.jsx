import {
  AlertTriangle,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 mt-10">
        {/* Warning Banner */}
        <div className="text-white py-3 px-4" style={{ backgroundColor: '#5E0C8C' }}>
          <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="font-medium">Be Cautious of Fraudulent Calls</span>
            <button className="ml-2 underline hover:no-underline cursor-pointer">
              read more...
            </button>
          </div>
        </div>

        {/* Currency Selector */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
          <div className="relative ">
            <button
              className="w-[200px] text-white px-4 py-2 rounded flex items-center space-x-2 text-sm"
              style={{ backgroundColor: '#5E0C8C' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4A0A70')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5E0C8C')}
            >
              <span className="w-5 h-3 bg-orange-500 rounded-sm mr-1"></span>
              {/* <span className="w-5 h-3 bg-white rounded-sm mr-1"></span>
            <span className="w-5 h-3 bg-green-500 rounded-sm mr-2"></span> */}
              <span>INR</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Shop Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">shop</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#5E0C8C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '')}
                  >
                    skincare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#5E0C8C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '')}
                  >
                    bodycare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#5E0C8C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '')}
                  >
                    haircare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#5E0C8C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '')}
                  >
                    fragrances
                  </a>
                </li>
              </ul>
            </div>

            {/* Learn Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">learn</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-purple-700">
                    plum blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    plum features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    plum rewards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    newsletters
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">help</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-purple-700">
                    contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    policies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    faqs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    empties4good
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    track your order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    return order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-700">
                    exchange order
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 text-center">
                sign up for expert beauty insights,
                <br />
                tips & previews!
              </h3>
              <p className="text-xs text-center text-gray-500 mb-4">
                (PS: we too hate spam!)
              </p>

              <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 mb-6">
                <input
                  type="email"
                  placeholder="your email"
                  className="flex-1 text-sm border border-[#5E0C8C] outline-0 pl-1 rounded-sm"
                />
                <button
                  className="text-white px-6 py-1 rounded-sm"
                  style={{ backgroundColor: '#5E0C8C' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4A0A70')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5E0C8C')}
                >
                  subscribe
                </button>
              </div>

              {/* Social Media and Contact */}
           <div className="flex items-center  justify-center space-x-4 mb-2 border-t border-b  border-gray-200 py-2">

                <div className="flex space-x-2 ">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                </div>
                <span className="text-sm text-gray-600">+91-750-649-6604</span>
              </div>

              <p className="text-sm text-gray-600 text-center">hello@plumgoodness.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4" style={{ backgroundColor: '#E9D8FD' }}>
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-700">
            <span>© 2025 plum, all rights reserved.</span>
            <a
              href="#"
              style={{ transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#5E0C8C')}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >
              privacy policy
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="#"
              style={{ transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#5E0C8C')}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >
              terms of service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
