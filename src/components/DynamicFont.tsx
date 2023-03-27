import { useEffect, useRef, useState, CSSProperties } from 'react'

interface DynamicFontProps {
	content: string;
	style?: CSSProperties;
	className?: string
}

export default function DynamicFont({content, style, className}: DynamicFontProps) {
	const textRef = useRef<null | HTMLParagraphElement>(null)
	const [scale, setScale] = useState(1)


	function getNodeWidth(node: HTMLElement, type: 'container' | 'text') {
		const nodeStyles = window.getComputedStyle(node);
		const width = type === 'container' ? node.clientWidth : node.scrollWidth;

		const borderLeftWidth = parseFloat(nodeStyles.borderLeftWidth);
		const borderRightWidth = parseFloat(nodeStyles.borderRightWidth);
		const paddingLeft = parseFloat(nodeStyles.paddingLeft);
		const paddingRight = parseFloat(nodeStyles.paddingRight);
		return width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight;
	}

	const fixWidth = () => {
		let ref = textRef.current

		const maxWidth =  ref ? getNodeWidth(ref.parentElement as HTMLElement, 'container') : 1;
		const currentWidth =  ref ? getNodeWidth(ref, 'text') : 1;

		setScale(currentWidth > maxWidth ? (maxWidth / currentWidth) : 1 );
	};

	useEffect(() => {
		fixWidth()		
	}, [content])



	return (
		<p
			className={className} 
			ref={textRef} 
			style={{
				...style,
				whiteSpace: 'nowrap',			
				transform: scale === 1 ? 'scale(1)' : `scale(${scale}, ${scale})`,
			}}
		>
			{content}
		</p>
	)
}