createFilters=(...names)=>{for(i of names){this[i]??={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0}}},
useFilter=(value,name,amount=0.5,stage='h',acidity=0.9)=>(
z=acidity+acidity/(1-amount),
this[name].a+=amount*(value-this[name].a+z*(this[name].a-this[name].b)),
this[name].b+=amount*(this[name].a-this[name].b),
this[name].c+=amount*(this[name].b-this[name].c),
this[name].d+=amount*(this[name].c-this[name].d),
this[name].e+=amount*(this[name].d-this[name].e),
this[name].f+=amount*(this[name].e-this[name].f),
this[name].g+=amount*(this[name].f-this[name].g),
this[name].h+=amount*(this[name].g-this[name].h),
this[name][stage]
),useFilterHi=(value,name,amount=0.5,stage='h',acidity=0.9)=>(
value-useFilter(value,name,amount,stage,acidity)
),createFilters('filter'),
t/=4,

t<1?(this.LFSR=65535):0,

this.v??=0,

this.noise??= function(t,o=2,w=0) {


	//if (t<2) {console.error("start")}

	processLFSR = function(width=0) {
		S=width?100000100000000:100000000000000
		trade =(a,b)=>(LFSR[a] = LFSR[b])
		temp= LFSR&1^((LFSR&2)>>1)
		LFSR>>=1,
		LFSR = (temp ? (LFSR|S) : (LFSR&~S))
	}

	if ((t%(1<<(o)))==0) {
	processLFSR(w)
	//console.log(LFSR)
	v=LFSR&1
	}
	return v*128

},

this.track??=
[/*
 N SS SS */
'  F4   ',
'  F2   ',
'  F0   ',
'       ',
'       ',
'       ',
'       ',
'       ',

'  F4   ',
'  F2   ',
'  F0   ',
'       ',
'       ',
'       ',
'       ',
'       ',

'  F4   ',
'  F2   ',
'  F0   ',
'       ',
'       ',
'       ',
'       ',
'       ',

'  F4   ',
'  H4   ',
'  K4   ',
'       ',
'       ',
'       ',
'       ',
'       ',



'2 D3   ',
'  D3   ',
'  D3   ',
'  D3   ',
'       ',
'       ',
'       ',
'       ',

'2 K2   ',
'  K2   ',
'  K2   ',
'  K2   ',
'       ',
'       ',
'       ',
'       ',

'2 D3   ',
'  D3   ',
'  D3   ',
'  D3   ',
'       ',
'       ',
'       ',
'       ',

'2 K2   ',
'  K2   ',
'  K2   ',
'  K2   ',
'       ',
'       ',
'       ',
'       ',

'0 D3   ',
'  D3   ',
'  D3   ',
'  D3   ',
'       ',
'       ',
'       ',
'       ',

'0 K2   ',
'  K2   ',
'  K2   ',
'  K2   ',
'       ',
'       ',
'       ',
'       ',

'0 D3   ',
'  D3   ',
'  D3   ',
'  D3   ',
'  K2   ',
'  K2   ',
'  K2   ',
'  K2   ',

'0 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',
'  C3   ',
'  C3   ',
'  C3   ',
'  C3   ',



'2 D3   ',
'  D3   ',
'  D3   ',
'  D3   ',
'       ',
'       ',
'       ',
'       ',

'2 K2   ',
'  K2   ',
'  K2   ',
'  K2   ',
'2      ',
'       ',
'       ',
'       ',

'2 D3   ',
'  D3   ',
'  D3   ',
'  D3   ',
'       ',
'       ',
'       ',
'       ',

'2 K2   ',
'  K2   ',
'  K2   ',
'  K2   ',
'       ',
'       ',
'       ',
'       ',

'0 D3   ',
'  D3   ',
'  D3   ',
'  D3   ',
'       ',
'       ',
'       ',
'       ',

'0 K2   ',
'  K2   ',
'  K2   ',
'  K2   ',
'0      ',
'       ',
'       ',
'       ',

'0 D3   ',
'  D3   ',
'  D3   ',
'  D3   ',
'  K2   ',
'  K2   ',
'  K2   ',
'  K2   ',

'0 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',
'  C3   ',
'  C3   ',
'  C3   ',
'  C3   ',



'2 F3   ',
'  F3   ',
'  F3   ',
'  F3   ',
'2      ',
'       ',
'       ',
'       ',

'2 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',
'       ',
'       ',
'       ',
'       ',

'2 F3   ',
'  F3   ',
'  F3   ',
'  F3   ',
'2      ',
'       ',
'       ',
'       ',

'2 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',
'       ',
'       ',
'       ',
'       ',

'0 F3   ',
'  F3   ',
'  F3   ',
'  F3   ',
'0      ',
'       ',
'       ',
'       ',

'0 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',
'       ',
'       ',
'       ',
'       ',

'0 F3   ',
'  F3   ',
'  F3   ',
'  F3   ',
'0 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',

'0 C3   ',
'  C3   ',
'  C3   ',
'  C3   ',
'  E3   ',
'  E3   ',
'  E3   ',
'  E3   ',



'2 F3   ',
'  F3   ',
'2 F3   ',
'  F3   ',
'       ',
'       ',
'2      ',
'       ',

'2 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',
'2      ',
'       ',
'       ',
'       ',

'2 F3   ',
'  F3   ',
'2 F3   ',
'  F3   ',
'       ',
'       ',
'2      ',
'       ',

'2 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',
'2      ',
'       ',
'       ',
'       ',

'0 F3   ',
'  F3   ',
'0 F3   ',
'  F3   ',
'       ',
'       ',
'0      ',
'       ',

'0 A3   ',
'  A3   ',
'  A3   ',
'  A3   ',
'0      ',
'       ',
'       ',
'       ',

'0 F3   ',
'  F3   ',
'0 F3   ',
'  F3   ',
'  A3   ',
'  A3   ',
'0 A3   ',
'  A3   ',

'0 C3   ',
'  C3   ',
'  C3   ',
'  C3   ',
'0 F3   ',
'  F3   ',
'  F3   ',
'  F3   ',



'2 H3   ',
'  H3   ',
'  H3   ',
'  H3   ',
'2      ',
'       ',
'       ',
'2      ',

'  C3   ',
'  C3   ',
'2 C3   ',
'  C3   ',
'       ',
'2      ',
'       ',
'       ',

'2 H3   ',
'  H3   ',
'2 H3   ',
'  H3   ',
'2      ',
'       ',
'       ',
'2      ',

'  C3   ',
'  C3   ',
'2 C3   ',
'  C3   ',
'       ',
'2      ',
'       ',
'       ',

'0 H3   ',
'  H3 A3',
'  H3 G3',
'  H3 A4',
'0      ',
'       ',
'       ',
'0      ',

'  C3   ',
'  C3   ',
'0 C3   ',
'  C3   ',
'       ',
'       ',
'       ',
'       ',

'0 H3   ',
'  H3   ',
'0 H3   ',
'  H3   ',
'  C3   ',
'0 C3   ',
'  C3   ',
'  C3   ',

'0 E3   ',
'  E3   ',
'  E3   ',
'0 E3   ',
'  G3   ',
'  G3   ',
'  G3   ',
'  G3   ',



'  H3   ',
'  H3   ',
'  H3   ',
'  H3   ',
'2      ',
'       ',
'       ',
'       ',

'2 C3   ',
'  C3   ',
'2 C3   ',
'  C3   ',
'2      ',
'       ',
'       ',
'2      ',

'  H3   ',
'  H3   ',
'2 H3   ',
'  H3   ',
'       ',
'2      ',
'       ',
'       ',

'2 C3   ',
'  C3   ',
'  C3   ',
'  C3   ',
'       ',
'       ',
'       ',
'       ',

'  H3   ',
'  H3   ',
'  H3   ',
'  H3   ',
'0      ',
'       ',
'       ',
'       ',

'0 C3   ',
'  C3 A2',
'0 C3 G2',
'  C3 A3',
'0      ',
'       ',
'       ',
'0      ',

'  H3   ',
'  H3   ',
'0 H3   ',
'  H3   ',
'  C3   ',
'0 C3   ',
'  C3 A2',
'  C3 G2',

'0 E3 A3',
'  E3   ',
'  E3   ',
'  E3   ',
'  G3   ',
'  G3   ',
'  G3   ',
'  G3   ',



'2 J3   ', // Had to improvise here due to limitations
'  J3   ',
'  J3   ',
'2 J3   ',
'       ',
'       ',
'2      ',
'       ',

'  E3   ',
'2 E3   ',
'  E3   ',
'  E3   ',
'2      ',
'       ',
'       ',
'2      ',

'  J3   ',
'  J3   ',
'2 J3   ',
'  J3   ',
'       ',
'2      ',
'       ',
'       ',

'2 E3   ',
'  E3   ',
'  E3   ',
'2 E3   ',
'       ',
'       ',
'2      ',
'       ',

'0 J3   ',
'  J3   ',
'  J3   ',
'0 J3   ',
'     A2',
'     G2',
'0    A3',
'       ',

'  E3   ',
'0 E3   ',
'  E3   ',
'  E3   ',
'0      ',
'       ',
'       ',
'0      ',

'  J3   ',
'  J3   ',
'0 J3   ',
'  J3   ',
'  E3   ',
'0 E3   ',
'  E3   ',
'  E3   ',

'0 G3   ',
'  G3   ',
'  G3   ',
'0 G3   ',
'  I3 A2',
'  I3 G2',
'0 I3 A3',
'  I3   ',



'  L3   ',
'2 L3   ',
'  L3   ',
'  L3   ',
'       ',
'       ',
'       ',
'2      ',

'  G3   ',
'  G3   ',
'  G3   ',
'  G3   ',
'       ',
'       ',
'       ',
'       ',

'2 L3   ',
'  L3   ',
'  L3   ',
'  L3   ',
'2      ',
'       ',
'       ',
'       ',

'2 G3   ',
'  G3   ',
'  G3   ',
'  G3   ',
'       ',
'       ',
'       ',
'       ',

'  L3   ',
'  L3   ',
'0 L3   ',
'  L3 A2',
'     G2',
'     A3',
'       ',
'0      ',

'  G3 A2',
'  G3 G2',
'  G3 A3',
'  G3   ',
'       ',
'       ',
'       ',
'       ',

'0 L3   ',
'  L3   ',
'  L3 A2',
'  L3 G2',
'0 G3 A3',
'  G3   ',
'  G3 A2',
'  G3 G2',

'0 I3 A3',
'  I3   ',
'  I3   ',
'  I3   ',
'  K3   ',
'  K3   ',
'  K3   ',
'  K3   ',



'2 N3   ',
'  N3   ',
'2 N3   ',
'  N3   ',
'2      ',
'       ',
'2      ',
'       ',

'2 I3   ',
'  I3   ',
'2 I3   ',
'  I3   ',
'2      ',
'       ',
'2      ',
'2      ',

'2 N3   ',
'  N3   ',
'2 N3   ',
'  N3   ',
'2      ',
'       ',
'2      ',
'       ',

'2 I3   ',
'2 I3   ',
'2 I3   ',
'  I3   ',
'2      ',
'2      ',
'2      ',
'2      ',

'0 N3   ',
'  N3   ',
'0 N3   ',
'  N3   ',
'0      ',
'       ',
'0      ',
'       ',

'0 I3   ',
'  I3   ',
'0 I3   ',
'  I3   ',
'0      ',
'       ',
'0      ',
'0      ',

'0 N3   ',
'  N3   ',
'0 N3   ',
'  N3   ',
'0 I3   ',
'  I3   ',
'0 I3   ',
'  I3   ',

'0 K3   ',
'0 K3   ',
'0 K3   ',
'  K3   ',
'0 M3   ',
'0 M3   ',
'0 M3   ',
'0 M3   ',



'  P3   ',
'  P3   ',
'  P3   ',
'  P3   ',
'       ',
'       ',
'       ',
'       ',

'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',

'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',

'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'2      ',

'  P2   ',
'  P2   ',
'  P2   ',
'  P2   ',
'       ',
'       ',
'       ',
'       ',

'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',

'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',

'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'       ',
'0      ',


'  P2   ',
'  P2   ',
'  P2 A2',
'  P2 G2',
'     A3',
'       ',
'       ',
'       ',
],
o0= (note,oct,amp) => (((t*4)*2**((note/12)+oct))&128)/(128/amp), // Square wave synth
i=(t/32.3e3)*(1<<14),	// Noise fade
STR=track[int((i>>8))]??'        ', // Tracker
i&=255, // Noise fade pt 2

N=STR[0]==' '?0:noise(t,STR[0],0)/max(1,i/64),				 // Noise channel
S1=STR[2]==' '?0:o0(STR.charCodeAt(2)-67,STR[3]-2,128),	// Square channel 1
S2=STR[5]==' '?0:o0(STR.charCodeAt(5)-67,STR[6]-2,128), //  Square channel 2

O=(N+S1+S2)/2//,useFilterHi(O,'filter',0.2,'a',0.6)/2+128