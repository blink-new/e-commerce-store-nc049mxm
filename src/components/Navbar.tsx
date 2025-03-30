
import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  BellIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const navigation = [
  { 
    name: 'Create', 
    href: '/create',
    description: 'Start your new project' 
  },
  { 
    name: 'Explore', 
    href: '/explore',
    description: 'Discover amazing work'
  },
  { 
    name: 'About', 
    href: '/about',
    description: 'Learn more about us'
  },
  { 
    name: 'Contact', 
    href: '/contact',
    description: 'Get in touch'
  },
];

const mockNotifications = [
  {
    id: 1,
    title: 'New message from Sarah',
    description: 'Hey, I loved your latest design!',
    time: '5m ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Project update',
    description: 'Your project "Modern UI" was featured',
    time: '1h ago',
    unread: true,
  },
  {
    id: 3,
    title: 'Remember to complete your profile',
    description: 'Add a bio and portfolio links',
    time: '2h ago',
    unread: false,
  },
];

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
      <nav className="relative flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <motion.a
            href="/"
            className="-m-1.5 p-1.5 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-serif text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Essence
            </span>
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          <div className="relative flex items-center">
            <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 w-64 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-900 hover:text-primary transition-colors relative group py-2"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
            </motion.a>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          {/* Notifications */}
          <Popover className="relative">
            <Popover.Button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">
              <BellIcon className="h-6 w-6 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 mt-3 w-80 transform px-4">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold">Notifications</h3>
                      <button className="text-xs text-primary hover:text-primary/80">
                        Mark all as read
                      </button>
                    </div>
                    <div className="space-y-3">
                      {mockNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`flex gap-4 p-2 rounded-lg transition-colors ${
                            notification.unread ? 'bg-gray-50' : ''
                          }`}
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {notification.description}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {notification.time}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* User Profile */}
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="h-8 w-8 rounded-full object-cover"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 mt-3 w-64 transform px-4">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white">
                    <div className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={mockUser.avatar}
                          alt={mockUser.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {mockUser.name}
                          </p>
                          <p className="text-xs text-gray-500">{mockUser.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-100">
                      {[
                        ['My Profile', '/profile'],
                        ['Settings', '/settings'],
                        ['Help', '/help'],
                      ].map(([label, href]) => (
                        <a
                          key={label}
                          href={href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 p-4">
                      <button
                        className="w-full text-left text-sm text-red-600 hover:text-red-500 transition-colors"
                        onClick={() => console.log('Sign out')}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="font-serif text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Essence
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="relative mb-4">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group -mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <span className="flex-1">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.description}</span>
                  </a>
                ))}
              </div>
              <div className="py-6">
                {/* Mobile Profile Section */}
                <div className="flex items-center gap-4 mb-4 px-2">
                  <img
                    src={mockUser.avatar}
                    alt={mockUser.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{mockUser.name}</p>
                    <p className="text-sm text-gray-500">{mockUser.email}</p>
                  </div>
                </div>
                {[
                  ['My Profile', '/profile'],
                  ['Settings', '/settings'],
                  ['Help', '/help'],
                  ['Sign out', '/logout'],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}