"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { Monoton } from "next/font/google";
import { LockIcon, LucideIcon, X, Home, Briefcase, Search, Settings, User, Users, ChevronUp, ChevronDown, AlertCircle, ShieldAlert, AlertTriangle, Layers3, Flame, AlertOctagon, Archive, Activity } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import { useGetProjectsQuery } from '@/app/state/api';

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
  iconClassName?: string;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
  iconClassName = "text-gray-800 dark:text-gray-100",
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link
      href={href}
      className={`w-full relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
        isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
      } justify-start px-8 py-3`}
    >
      {isActive && (
        <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-turquoise" />
      )}
      <Icon className={`h-6 w-6 ${iconClassName}`} />
      {!isCollapsed && <span className={'font-medium text-gray-800 dark:text-gray-100'}>{label}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const { data: projects } = useGetProjectsQuery();
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-gray-800 overflow-y-auto bg-white ${isSidebarCollapsed ? 'w-0 hidden' : 'w-64'}`;

  return (
    <div className={sidebarClassNames}>
      <div className='flex h-[100%] w-full flex-col justify-start'>
        {/* Toplogo */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className={`text-3xl font-bold text-turquoise dark:text-white ${monoton.className}`}>
            TASKLYTICS
          </div>
          {isSidebarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() => {
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
              }}
            >
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>
        {/* Team */}
        <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700'>
          <Image
  src="https://tpm-s3-images-for-adam.s3.ap-southeast-1.amazonaws.com/logo.png"
  alt="Logo"
  width={60}
  height={60}
  priority
/>
          <div>
            <h3 className='text-md font-bold tracking-widest dark:text-gray-200'>
              MY TEAM
            </h3>
            <div className='mt-1 flex items-start gap-2'>
              <LockIcon className='mt-1[0.1rem] h-3 text-gray-500 dark:text-gray-400' />
              <p className='text-xs text-gray-500'>Private</p>
            </div>
          </div>
        </div>
        {/* NAVBARLINKS */}
        <nav className='z-10 w-full'>
          <SidebarLink icon={Home} label="Home" href="/" isCollapsed={isSidebarCollapsed} />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" isCollapsed={isSidebarCollapsed} />
          <SidebarLink icon={Search} label="Search" href="/search" isCollapsed={isSidebarCollapsed} />
          <SidebarLink icon={Settings} label="Settings" href="/settings" isCollapsed={isSidebarCollapsed} />
          <SidebarLink icon={User} label="Users" href="/users" isCollapsed={isSidebarCollapsed} />
          <SidebarLink icon={Users} label="Teams" href="/teams" isCollapsed={isSidebarCollapsed} />
        </nav>
        {/* Projects Toggle */}
        <button onClick={() => setShowProjects((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500">
            <span className="">Projects</span>
            {showProjects ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
        </button>
        {/* PROJECTS LIST */}
        {showProjects &&
          projects?.map((project) => (
            <SidebarLink
              key={project.id}
              icon={Activity}
              label={project.name}
              href={`/projects/${project.id}`}
              isCollapsed={isSidebarCollapsed}
            />
          ))}
        {/* Priorities Toggle */}
        <button onClick={() => setShowPriority((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500">
            <span className="">Priorities</span>
            {showPriority ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
        </button>
        {/* PRIORITIES LIST */}
        {showPriority && (
          <>
            <SidebarLink icon={AlertCircle} label="Urgent" href="/priority/urgent" isCollapsed={isSidebarCollapsed} iconClassName="text-red-500" />
            <SidebarLink icon={ShieldAlert} label="High" href="/priority/high" isCollapsed={isSidebarCollapsed} iconClassName="text-orange-500" />
            <SidebarLink icon={AlertTriangle} label="Medium" href="/priority/medium" isCollapsed={isSidebarCollapsed} iconClassName="text-yellow-500" />
            <SidebarLink icon={AlertOctagon} label="Low" href="/priority/low" isCollapsed={isSidebarCollapsed} iconClassName="text-blue-500" />
            <SidebarLink icon={Archive} label="Backlog" href="/priority/backlog" isCollapsed={isSidebarCollapsed} iconClassName="text-gray-500" />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;