ch1p1=[233.08,277.18,261.63,349.23,233.08,0,233.08,0],ch1p2=[233.08,0,261.63,0,277.18,0,233.08,0],ch1p3=[233.08,0,349.23,0,415.30,0,311.13,0],ch1p4=[311.13,0,349.23,0,415.30,0,523.25,0,554.37,523.25,415.30,349.23,466.16,0,311.13,0],ch1p5=[311.13,0,349.23,0,415.30,0,523.25,0,554.37,523.25,415.30,349.23,466.16,0,0,0],ch1=[...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p1,...ch1p2,...ch1p2,...ch1p2,...ch1p2,...ch1p3,...ch1p3,...ch1p4,...ch1p2,...ch1p2,...ch1p2,...ch1p2,...ch1p3,...ch1p3,...ch1p5],ch2p1=[116.54,116.54,116.54,116.54,174.61,116.54,116.54,116.54],ch2p2=[92.50,92.50,92.50,92.50,138.59,92.50,92.50,92.50],ch2p3=[103.83,103.83,103.83,103.83,155.56,103.83,103.83,103.83],ch2p4=[116.54,116.54,116.54,116.54,116.54,116.54,116.54,116.54],ch2p5=[92.50,92.50,92.50,92.50,92.50,92.50,92.50,92.50],ch2p6=[103.83,103.83,103.83,103.83,103.83,103.83,103.83,103.83],ch2=[...ch2p1,...ch2p1,...ch2p1,...ch2p1,...ch2p2,...ch2p2,...ch2p3,...ch2p3,...ch2p1,...ch2p1,...ch2p1,...ch2p1,...ch2p2,...ch2p2,...ch2p3,...ch2p3,...ch2p4,...ch2p4,...ch2p4,...ch2p4,...ch2p5,...ch2p5,...ch2p6,...ch2p6,...ch2p4,...ch2p4,...ch2p4,...ch2p4,...ch2p5,...ch2p5,...ch2p6,...ch2p6],noop=[0,0,0,0,0,0,0,0],ch3p1=[466.16,554.37,523.25,698.46,466.16,0,466.16,0],ch3=[...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...noop,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1,...ch3p1],drmp1=[.5,0,1,0,0,.5,1,0],drmp2=[.5,0,1,0,.3,.3,.6,.6],drmp3=[.5,0,1,0,.5,0,1,0],drums=[...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp1,...drmp2,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,...drmp3,],speed=1400,min(max((t/30.76*ch1[floor(t/speed)%ch1.length]%256)/4+(t/30.76*ch2[floor(t/speed)%ch2.length]%256)/4+random()*drums[floor(t/speed)%drums.length]*95+(t/30.76*(ch3[floor(t/speed)%ch3.length])%256)/4,0),255)