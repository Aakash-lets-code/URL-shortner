import clientPromise from "@/lib/mongodb"


export async function POST(request) {

    const body = request.json()
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // check if the short url exists

    collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })


    return Response.json({ message: 'Hello World' })
  }