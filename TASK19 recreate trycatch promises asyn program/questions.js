function askedQuestion(question) {
    return { you_have_asked: question, status: true }
}

try {
    let answer = askedQuestion("how are you !")
    if (!answer.status) {
        throw ("invalid answer !")
    }
    console.log(answer)
} catch (e) {
    // console.log("got a error " + e)
    // console.info("got a error " + e)
    console.error("got a error " + e)
    // console.warn("got a error " + e)
}finally{
    console.log("program completed !")
}