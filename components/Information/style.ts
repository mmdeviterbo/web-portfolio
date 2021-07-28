import { makeStyles } from '@material-ui/core/styles'

export const desktopStyle = makeStyles((theme)=>({
    imageContainer: {
			backgroundColor : '#0e0718',
			minWidth: '70%',
			display : 'flex',
			justifyContent : 'flex-start',
			flexWrap: 'wrap',
    },
    timelineConnector:{
			height:'calc(16vh + 14px)',
			width: '4px',
			backgroundColor: 'white'
    },
    container:{
			minHeight:'100vh',
			maxWidth:'100vw',
    }, 			
    primary : {
			color: 'white',
			letterSpacing: '2px',
			textTransform : 'uppercase'
		},
    secondary : {
			color: 'white',
			fontSize:'medium',
			fontWeight: 600,
			letterSpacing: 1,
			fontFamily: '\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'
			
		}
}))

export const tabletMobileStyle = makeStyles((theme)=>({
	container:{
		margin:'0 4vw',
		'& > *':{
			border: '1px solid white',
			padding: theme.spacing(4),
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
			'& > *':{
				color : 'white'
			}
		},
	},
	rowPerson:{
		display: 'grid',
		gridTemplateColumns: '1fr 4fr',
		placeContent:'center',
		'& > div > p:nth-child(1)':{
			fontFamily: '\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif',
			fontSize: 'large',
			letterSpacing:'1px',
			textTransform :'uppercase',
		},
		'& > div > p:nth-child(2)':{
			lineHeight: 1
		}
	},
	rowTech:{
		display: 'grid',
		gridTemplateColumns: '1fr 4fr',
	},
	rowTechStack:{
		display: 'flex',
		flexWrap: 'wrap',
	},
	primary : {
		display:'flex',
		alignItems:'center',
		fontWeight:600,
		color: 'white',
		letterSpacing: '2px',
		textTransform : 'uppercase',
		fontSize : 'medium',
	},
}))