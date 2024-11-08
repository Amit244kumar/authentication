import {connect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function GET(request:NextRequest){
    // extracting data from token  
    const userId=await getDataFromToken(request)

    const user=await User.findOne({_id:userId}).select("-password")
 
    // check if there is no user
    // if(){

    // }   
    return NextResponse.json({
        message:"User found",
        data:user
    })
}

