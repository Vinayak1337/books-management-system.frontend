/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				fredoka: ['Fredoka', 'sans-serif']
			},
			colors: {
				primary: {
					DEFAULT: '#018093',
					50: '#E6F7F8',
					100: '#C0E9ED',
					200: '#96D9E1',
					300: '#6CC9D5',
					400: '#42B9C9',
					500: '#18A9BD',
					600: '#018093',
					700: '#016E7A',
					800: '#015A61',
					900: '#014648',
					form: '#b0e1ea5e'
				},
				secondary: {
					DEFAULT: '#E2D53B',
					50: '#FCFAF0',
					100: '#FAF7E0',
					200: '#F5EEC1',
					300: '#F0E4A2',
					400: '#EAE083',
					500: '#E2D53B',
					600: '#BFAE32',
					700: '#9C8729',
					800: '#796F20',
					900: '#574619'
				},
				midnight: {
					DEFAULT: '#2C2A2A',
					50: '#BEBDBD',
					100: '#B2B1B1',
					200: '#9A9999',
					300: '#828181',
					400: '#6A6969',
					500: '#2C2A2A',
					600: '#242323',
					700: '#1C1B1B',
					800: '#141414',
					900: '#0C0C0C'
				},
				black: {
					DEFAULT: '#000000',
					fade: 'rgba(0, 0, 0, 0.5)'
				}
			},
			backgroundImage: {
				'auth-bg': "url('/auth-bg.png')"
			},
			spacing: {
				18: '4.5rem',
				94: '23.5rem'
			},
			boxShadow: {
				nav: '0px 4px 4px rgba(0, 0, 0, 0.1)'
			}
		}
	},
	plugins: []
};
