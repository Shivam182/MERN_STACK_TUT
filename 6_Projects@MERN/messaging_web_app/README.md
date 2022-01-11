# We will be using :
1. React for FrontEnd
2. MongoDb Express Nodejs Backend
3. Firebase for Authentication & Hosting
4. IMP : Pusher for making MongoDB Real-Time , and providing it functionality just like firebase's RTDB. 

# What's benefit of using pusher ?
Ans : Without it your websites would need to reload everytime , some data changes to get new data . Or you will have to integrate some functionality from your own side like , fetching data every 5 seconds . Which will make the project very very slow & miserable . 
Pusher comes to rescue .

# How Pusher Works Overall ?
Ans : It places itself between the Front-end & the Back-End , its connected to front-end at those places where data changes in RealTime . And it is also connected to Database accessing methods , where it sends data then access , changed new data to show on that frontEnd Point . It Does all these things in Alive mode , No Refereshing Required . 


