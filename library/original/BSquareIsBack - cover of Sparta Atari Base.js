T=t*1.15,c=([a=random()*4e4/(T&4095),a,0,0,a,a,0,0,a,0,b=random()*4e4/(T&2047),0,b,b,random()*4e4/(T&1023),random()*4e4/(T&511)][T>>11&15]&255)%256/2,d=(random()*4e4/(T&[4095,4095,4095,2047][T>>12&3])&255)%256/2,e=t*(0xAFEDC320>>t/2.65*2**([-3,4,-3,4,-2,5,-2,5,-5,2,-5,2,-2,5,-2,5][T>>11&15]/12)&1)&&64,f=t*(0xAFEDC320>>t/2.65*2**([-15,-14,-17,-14][T>>13&3]/12)&1)&&64,g=t*4*[2.5,-2.5,2.6,-2.6,2.2,-2.2,2.6,-2.6][T>>12&7]&64,h=t*[1.25,,1.25,,1.3,,1.3,,1.1,,1.1,,1.3,,1.3,][T>>11&15]&64,i=(t*2**([16,,23,,29,,24,,14,,21,14,29,,24][T>>11&15]/12)&63)+16&64,j=t*2*[1.9,1.9,3.8,,2,2,4,,1.7,1.7,3.4,2.5,2,4,2,4][T>>11&15]&64,k=(random()*4e4/(T&[0,0,0,2047][T>>13&3])&255)%256/2,l=t*8*2**([4,4,12,12,16,16,,,5,5,17,5,5,17,17,17,2,2,14,14,,,,,17,17,5,5,2,2,5,5][T>>10&31]/12)&64,m=((t*8*2**([4,4,,4,4,,4,,5,5,,5,5,,5,,2,2,,2,2,,2,,5,5,,5,5,,5,][T>>10&31]/12)&64)&255)*(~T>>2&255)>>8,min(255,[c,d+e+f,d+e+f,g+h,g+h,g+h+d,d+e+f,d+e+f,d+e+f+i,d+e+f+i,j+h+k,j+h+k,d+e+f,d+e+f,d+e+f+l,d+e+f+l,m,m,m+i,m+i,d+e+f,d+e+f,d+e+f+i,d+e+f+i,j+h,j+h,j+h,j+h,j,j,d+e+f+m,d+e+f+m,d+e+f+i,d+e+f+i,d+e+f+l,d+e+f+l][T>>15])