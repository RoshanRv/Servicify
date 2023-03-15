import React, { ReactNode } from "react"
import {
    AiFillThunderbolt,
    AiOutlineMail,
    AiOutlinePhone,
} from "react-icons/ai"
import { FaMoneyBillAlt, FaRegAddressCard } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"
import { AiFillFormatPainter } from "react-icons/ai"
import { BsFillBoxSeamFill } from "react-icons/bs"
import { TfiRulerAlt2 } from "react-icons/tfi"
import { GiKitchenTap } from "react-icons/gi"
import PAINTER_3D from "@/public/images/painter_3d.webp"
import ELECTRICIAN_3D from "@/public/images/electrician_3d.webp"
import PACKER_3D from "@/public/images/packer_3d.webp"
import PLUMBER_3D from "@/public/images/plumber_3d.webp"
import DESIGNER_3D from "@/public/images/designer_3d.png"
import Image, { StaticImageData } from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { LinkButton } from "../button/Button"
import { BiUser } from "react-icons/bi"

const RequestCard = () => {
    return (
        <div className="flex rounded-xl shadow-xl bg-light dark:bg-dark items-center  overflow-hidden group border-2 border-pri">
            {/* Left Side */}
            <div className="text-[10rem]  transition-all bg-pri  text-black/60 h-full  py-14 flex flex-1">
                <BiUser />
            </div>
            {/* Right Side */}

            <div className="flex justify-start items-start flex-col gap-y-4 p-4 dark:text-light text-dark   relative">
                {/* Name */}
                <h1 className="text-pri text-3xl font-semibold">Reddy</h1>
                {/* Phone */}
                <div className="flex items-center justify-center gap-x-2 ">
                    <AiOutlinePhone />
                    <p>234230090</p>
                </div>
                {/* Email */}
                <div className="flex items-center justify-center gap-x-2 ">
                    <AiOutlineMail />
                    <p>sdA@asdas.com</p>
                </div>
                {/* Address */}
                <div className="flex items-center justify-center gap-x-2 ">
                    <FaRegAddressCard />
                    <p>{"13/dasdas sadasd "}</p>
                </div>
                {/*   Btn   */}
                <div className="flex flex-col md:flex-row gap-4">
                    <LinkButton link={`/services/sdasd7889`} size="small">
                        <h1>Call Now</h1>
                    </LinkButton>
                    <LinkButton
                        variant={"primary"}
                        link={`/services/sdasd7889`}
                        size="small"
                    >
                        <h1>Mail Now</h1>
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}

export default RequestCard
