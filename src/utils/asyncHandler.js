const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).reject((err)=>next(err))
    }
}

 // const asyncHandler=()=>{ ()=>{}}
 /*const asyncHandler= (func) => async(req,res,next) => {
    try {
        await func(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json{
            message:"error.message",
            success:false
        }
        
    }
 
  }*/

export {asyncHandler}