import { Separator } from "@/components/ui/separator";

function SubTitle({subTitle} : {subTitle?: string}) {
    return ( 
        <div
            className="
                flex
                items-center
                justify-center
            "
        >
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
            <h2 className="text-white text-[25px] sm:text-[40px] text-center m-0">
                {subTitle}
            </h2>
            <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
        </div>
    );
}

export default SubTitle;