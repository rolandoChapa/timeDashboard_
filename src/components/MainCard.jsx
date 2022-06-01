import face from '../images/image-jeremy.png'
import work from '../images/icon-work.svg'
import play from '../images/icon-play.svg'
import study from '../images/icon-study.svg'
import exercise from '../images/icon-exercise.svg'
import social from '../images/icon-social.svg'
import seflcare from '../images/icon-self-care.svg'
import data from '../data.json'
import React, { useState } from 'react'
export default function MainCard(props) {
return (
<div className="relative md:top-[10rem] top-[4rem]">
    <div class="md:grid overflow-hidden md:grid-cols-2 md:grid-rows-2 md:gap-x-5 md:gap-y-2 md:grid-flow-col md:h-full">
        <div className="md:row-start-1 md:row-end-3">
            <div class="relative md:w-[12rem] w-[20rem] md:h-[22rem] h-[7rem] md:m-auto z-50 rounded-2xl bg-blue ">
                <img className="md:block inline relative rounded-full md:top-[1.5rem] top-[1rem] left-[1.5rem] w-20 md:w-28 border-2 md:border-4 border-white" src={face} alt={face} />
                <p className="md:block inline relative md:left-[2rem] md:top-[2rem] left-[2rem] text-paleBlue md:text-[24px] text-[16px] font-light">Report for</p>
                <h1 className="md:block relative left-[7rem] md:left-[2rem] bottom-[2rem] md:top-[2rem] text-white md:text-[36px] text-[18px] font-light">Jermey Robson</h1>
            </div>
            <div class="md:w-[12rem] w-[20rem] md:h-[11.5rem] h-[10rem] md:m-auto md:bottom-[5rem] bottom-[7rem] relative z-40 rounded-2xl bg-darkBlue">
                <a href="daily" onClick={e=> {
                    e.preventDefault();
                    props.clickTimeFrame(1);
                    }}
                    >
                    <div className="relative inline md:block md:top-[5.5rem] top-[7.5rem] md:left-[1.5rem] left-[2rem] hover:text-white active:text-white focus:text-white text-paleBlue">
                        Daily</div>
                </a>
                <a href="weekly" onClick={e=> {
                    e.preventDefault();
                    props.clickTimeFrame(2);
                    }}
                    >
                    <div className="relative inline md:block md:top-[6rem] md:left-[1.5rem] top-[7.5rem] left-[5.5rem] hover:text-white active:text-white focus:text-white text-paleBlue">
                        Weekly</div>
                </a>
                <a href="monthly" onClick={e=> {
                    e.preventDefault();
                    props.clickTimeFrame(3);
                    }}
                    >
                    <div className="relative inline md:top-[6.5rem] md:left-[1.5rem] top-[7.5rem] left-[9rem] text-start hover:text-white active:text-white focus:text-white text-paleBlue">
                        Monthly</div>
                </a>
            </div>
        </div>
        <div className="relative md:bottom-[0rem] bottom-[5rem]">
            <div class="md:w-[12rem] md:h-[12rem] w-[20rem] h-[7rem] m-auto z-40 rounded-2xl bg-lightRed-Work overflow-hidden ">
                <img className="relative md:w-[4rem] md:bottom-[.5rem] md:left-[7.5rem] bottom-[.5rem] left-[13.5rem] overflow-hidden" src={work} alt="placeholder+image" />
            </div>
            <div class="relative md:w-[12rem] md:h-[12rem] w-[20rem] h-[7rem] m-auto z-50 md:bottom-[10.5rem] bottom-[5.5rem] rounded-2xl bg-darkBlue overflow-hidden ">
                <div className=" tracking-tighter">
                    <h1 className="md:block relative md:top-[2rem] top-[1rem] left-[1.5rem] text-white md:text-[18px] text-[16px]">{props.workTitle}</h1>
                    <p className="md:block relative inline md:top-[2.5rem] top-[1.5rem] left-[1.5rem] text-white md:text-[48px] text-[36px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return props.timeFrameHours['daily']['current'] + "hrs"
                        case 2: return props.timeFrameHours['weekly']['current'] + "hrs"
                        case 3: return props.timeFrameHours['monthly']['current'] + "hrs"
                        }
                        })()}
                    </p>
                    <p className="relative md:block inline md:top-[3rem] top-[1.5rem] md:left-[1.5rem] left-[4.5rem] text-paleBlue md:text-[14px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return "Yesterday - " + props.timeFrameHours['daily']['previous'] + "hrs"
                        case 2: return "Last Week - " + props.timeFrameHours['weekly']['previous'] + "hrs"
                        case 3: return "Last Month - " + props.timeFrameHours['monthly']['previous'] + "hrs"
                        }
                        })()}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative md:bottom-[10rem] bottom-[9rem]">
            <div class="md:w-[12rem] md:h-[12rem] m-auto z-40 rounded-2xl bg-limeGreen-Exercise overflow-hidden">
                <img className="relative md:w-[4rem] md:bottom-[.5rem] md:left-[7.5rem] bottom-[.5rem] left-[13.5rem] overflow-hidden" src={exercise} alt="placeholder+image" />
            </div>
            <div class="relative md:w-[12rem] md:h-[12rem] w-[20rem] h-[7rem] m-auto z-50 md:bottom-[10.5rem] bottom-[1.5rem] rounded-2xl bg-darkBlue overflow-hidden ">
                <div className=" tracking-tighter">
                    <h1 className="relative md:block md:top-[2rem] top-[1rem] left-[1.5rem] text-white md:text-[18px] text-[16px]">Exercise</h1>
                    <p className="relative md:block inline md:top-[2.5rem] top-[1.5rem] left-[1.5rem] text-white md:text-[48px] text-[36px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return props.exerciseHours['daily']['current'] + "hrs"
                        case 2: return props.exerciseHours['weekly']['current'] + "hrs"
                        case 3: return props.exerciseHours['monthly']['current'] + "hrs"
                        }
                        })()}
                    </p>
                    <p className="relative md:block inline md:top-[3rem] top-[1.5rem] md:left-[1.5rem] left-[6.5rem] text-paleBlue md:text-[14px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return "Yesterday - " + props.exerciseHours['daily']['previous'] + "hrs"
                        case 2: return "Last Week - " + props.exerciseHours['weekly']['previous'] + "hrs"
                        case 3: return "Last Month - " + props.exerciseHours['monthly']['previous'] + "hrs"
                        }
                        })()}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative md:bottom-[0rem] bottom-[9rem]">
            <div class="md:w-[12rem] md:h-[12rem] m-auto z-40 rounded-2xl bg-softBlue overflow-hidden">
                <img className="relative md:w-[4rem] md:bottom-[.5rem] md:left-[7.5rem] bottom-[.5rem] left-[13.5rem] overflow-hidden" src={play} alt="placeholder+image" />
            </div>
            <div class="relative md:w-[12rem] md:h-[12rem] w-[20rem] h-[7rem] m-auto z-50 md:bottom-[10.5rem] bottom-[2.5rem] rounded-2xl bg-darkBlue overflow-hidden ">
                <div className=" tracking-tighter">
                    <h1 className="relative md:block  md:top-[2rem] top-[1rem] left-[1.5rem] text-white md:text-[18px] text-[16px]">Play</h1>
                    <p className="relative md:block inline md:top-[2.5rem] top-[1.5rem] left-[1.5rem] text-white md:text-[48px] text-[36px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return props.playHours['daily']['current'] + "hrs"
                        case 2: return props.playHours['weekly']['current'] + "hrs"
                        case 3: return props.playHours['monthly']['current'] + "hrs"
                        }
                        })()}
                    </p>
                    <p className="relative md:block inline md:top-[3rem] top-[1.5rem] md:left-[1.5rem] left-[6rem] text-paleBlue md:text-[14px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return "Yesterday - " + props.playHours['daily']['previous'] + "hrs"
                        case 2: return "Last Week - " + props.playHours['weekly']['previous'] + "hrs"
                        case 3: return "Last Month - " + props.playHours['monthly']['previous'] + "hrs"
                        }
                        })()}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative md:bottom-[10rem] bottom-[10rem]">
            <div class="md:w-[12rem] md:h-[12rem] m-auto z-40 rounded-2xl bg-violet-Social overflow-hidden">
                <img className="relative md:w-[4rem] md:bottom-[.5rem] md:left-[7.5rem] bottom-[.5rem] left-[13.5rem] overflow-hidden" src={social} alt="placeholder+image" />
            </div>
            <div class="relative md:w-[12rem] md:h-[12rem] w-[20rem] h-[7rem] m-auto z-50 md:bottom-[10.5rem] bottom-[4.5rem] rounded-2xl bg-darkBlue overflow-hidden ">
                <div className=" tracking-tighter">
                    <h1 className="relative md:block md:top-[2rem] top-[1rem] left-[1.5rem] text-white md:text-[18px] text-[16px]">Social</h1>
                    <p className="relative md:block inline md:top-[2.5rem] top-[1.5rem] left-[1.5rem] text-white md:text-[48px] text-[36px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return props.socialHours['daily']['current'] + "hrs"
                        case 2: return props.socialHours['weekly']['current'] + "hrs"
                        case 3: return props.socialHours['monthly']['current'] + "hrs"
                        }
                        })()}
                    </p>
                    <p className="relative md:block inline md:top-[3rem] top-[1.5rem] md:left-[1.5rem] left-[6rem] text-paleBlue md:text-[14px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return "Yesterday - " + props.socialHours['daily']['previous'] + "hrs"
                        case 2: return "Last Week - " + props.socialHours['weekly']['previous'] + "hrs"
                        case 3: return "Last Month - " + props.socialHours['monthly']['previous'] + "hrs"
                        }
                        })()}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative md:bottom-[0rem] bottom-[13rem]">
            <div class="md:w-[12rem] md:h-[12rem] m-auto z-40 rounded-2xl bg-lightRed-Study overflow-hidden ">
                <img className="relative md:w-[4rem] md:bottom-[.5rem] md:left-[7.5rem] bottom-[.5rem] left-[13.5rem] overflow-hidden" src={study} alt="placeholder+image" />
            </div>
            <div class="relative md:w-[12rem] md:h-[12rem] w-[20rem] h-[7rem] m-auto z-50 md:bottom-[10.5rem] bottom-[3.5rem] rounded-2xl bg-darkBlue overflow-hidden ">
                <div className=" tracking-tighter">
                    <h1 className="relative md:block md:top-[2rem] top-[1rem] left-[1.5rem] text-white md:text-[18px] text-[16px]">Study</h1>
                    <p className="relative md:block inline md:top-[2.5rem] top-[1.5rem] left-[1.5rem] text-white md:text-[48px] text-[36px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return props.studyHours['daily']['current'] + "hrs"
                        case 2: return props.studyHours['weekly']['current'] + "hrs"
                        case 3: return props.studyHours['monthly']['current'] + "hrs"
                        }
                        })()}
                    </p>
                    <p className="relative md:block inline md:top-[3rem] top-[1.5rem] md:left-[1.5rem] left-[6rem] text-paleBlue md:text-[14px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return "Yesterday - " + props.studyHours['daily']['previous'] + "hrs"
                        case 2: return "Last Week - " + props.studyHours['weekly']['previous'] + "hrs"
                        case 3: return "Last Month - " + props.studyHours['monthly']['previous'] + "hrs"
                        }
                        })()}
                    </p>
                </div>
            </div>
        </div>
        <div className="relative md:bottom-[10rem] bottom-[15rem]">
            <div class="md:w-[12rem] md:h-[12rem] m-auto z-40 rounded-2xl bg-softOrange-SelfCare overflow-hidden ">
                <img className="relative md:w-[4rem] md:bottom-[.5rem] md:left-[7.5rem] bottom-[.5rem] left-[13.5rem] overflow-hidden" src={seflcare} alt="placeholder+image" />
            </div>
            <div class="relative md:w-[12rem] md:h-[12rem] w-[20rem] h-[7rem] m-auto z-50 md:bottom-[10.5rem] bottom-[2.5rem] rounded-2xl bg-darkBlue overflow-hidden ">
                <div className=" tracking-tighter">
                    <h1 className="relative md:block md:top-[2rem] top-[1rem] left-[1.5rem] text-white md:text-[18px] text-[16px]">Self-Care</h1>
                    <p className="relative md:block inline md:top-[2.5rem] top-[1.5rem] left-[1.5rem] text-white md:text-[48px] text-[36px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return props.selfcareHours['daily']['current'] + "hrs"
                        case 2: return props.selfcareHours['weekly']['current'] + "hrs"
                        case 3: return props.selfcareHours['monthly']['current'] + "hrs"
                        }
                        })()}
                    </p>
                    <p className="relative md:block inline md:top-[3rem] top-[1.5rem] md:left-[1.5rem] left-[6rem] text-paleBlue md:text-[14px] font-light">
                        {
                        (() => {
                        switch(props.timeFrame) {
                        case 1: return "Yesterday - " + props.selfcareHours['daily']['previous'] + "hrs"
                        case 2: return "Last Week - " + props.selfcareHours['weekly']['previous'] + "hrs"
                        case 3: return "Last Month - " + props.selfcareHours['monthly']['previous'] + "hrs"
                        }
                        })()}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}