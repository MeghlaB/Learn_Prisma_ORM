import { prisma } from "./lib/prisma"


async function run() {
    //!  created user
       const createUser = await prisma.user.create({
        data:{
            name:" R",
            email:"r@gmail.com"
        }

       }) 
         console.log("createdUser:",createUser)

    // ! Created Profile 
    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio:'Helooooooo',
    //         userId:1
    //     }
    // })
    // console.log("createProfile:",createProfile)

    // !Created Post 

    // const createPost = await prisma.post.create({
    //     data:{
    //         title:'This is Title',
    //         content:"Hello Content",
    //         authorId:2
    //     }
    // })
    // console.log("createdPost:",createPost)

    //! By unique identifier
    // const user = await prisma.user.findUnique({
    //   where: {
    //     email: 'meghla@gmail.com',
    //   },
    // })
    // console.log(user)


    //! By ID
    const user = await prisma.user.findUnique({
        where: {
            id: 2,
        },
    })
    // console.log(user)

    // !Get All Record 

    const users = await prisma.user.findMany({
        //  include:{
        //     posts:true,
        //     profiles:true
        //  }
        select: {
            id: true,
            name: true,
            email: true,
            posts: true,
            profiles: true
        }

    })
    // console.dir(users,{depth:Infinity})



    // ! updated user data

    const updateUser = await prisma.profile.update({
        where: {
            id: 1,
        },
        data: {
            bio: 'Web Development & Master',
    
        },
        select:{
            id:true,
            bio:true,
            user:{
               select:{
                name:true,
                email:true
               }
                
            }
        }
    })
// console.log('updatedUser: ' , updateUser)


// ! Delete user delete()

const deleteUser = await prisma.user.delete({
    where:{
        id:1
    }
})
// console.log("deleteUser :  " , deleteUser)














}
run()