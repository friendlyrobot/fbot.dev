
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'neon-blue': '#0000FF',
				'electric-pink': '#FF00FF',
				'bright-green': '#00FF00',
				'sunshine-yellow': '#FFFF00',
				'light-beige': '#F5F5DC',
				'off-white': '#FAFAFA',
				'soft-gray': '#F0F0F0',
				'deep-gray': '#1a1a1a',
				'brand-primary': 'var(--brand-primary)',
				'brand-secondary': 'var(--brand-secondary)',
				'brand-accent': 'var(--brand-accent)',
				'brand-background': 'var(--brand-background)',
				'brand-foreground': 'var(--brand-foreground)',
			},
			borderRadius: {
				lg: '0.5rem',
				md: '0.25rem',
				sm: '0.125rem',
				DEFAULT: '0.25rem',
			},
			borderWidth: {
				DEFAULT: '2px',
				'0': '0',
				'2': '2px',
				'3': '3px',
				'4': '4px',
			},
			boxShadow: {
				DEFAULT: '4px 4px 0px 0px rgba(0,0,0,1)',
				'md': '6px 6px 0px 0px rgba(0,0,0,1)',
				'lg': '8px 8px 0px 0px rgba(0,0,0,1)',
				'xl': '10px 10px 0px 0px rgba(0,0,0,1)',
				'2xl': '12px 12px 0px 0px rgba(0,0,0,1)',
				'inner': 'inset 2px 2px 0px 0px rgba(0,0,0,1)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
