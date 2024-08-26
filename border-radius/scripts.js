const box = document.getElementById('box')
const boxRadius = document.getElementById('box-radius')
const btnCopy = document.getElementById('btn-copy')
const btnSubmit = document.getElementById('btn-submit')

function handlerSubmit(e) {
	let radius = e.target.value

	if (radius.includes('%')) {
		let radius = e.target.value
		box.style.borderRadius = radius
	}

	if (radius.includes(',')) {
		let split = radius.split(',').length
		if (split === 2) {
			let [r, l] = radius.split(',')

			if (radius.includes('%')) {
				box.style.borderStartStartRadius = r
				box.style.borderStartEndRadius = r
				box.style.borderEndStartRadius = l
				box.style.borderEndEndRadius = l
			}

			box.style.borderStartStartRadius = `${r}px`
			box.style.borderStartEndRadius = `${r}px`
			box.style.borderEndStartRadius = `${l}px`
			box.style.borderEndEndRadius = `${l}px`
		} else if (split === 4) {
			let [tl, tr, br, bl] = radius.split(',')

			if (radius.includes('%')) {
				box.style.borderTopLeftRadius = tl
				box.style.borderTopRightRadius = tr
				box.style.borderBottomRightRadius = br
				box.style.borderBottomLeftRadius = bl
			}

			box.style.borderTopLeftRadius = `${tl}px`
			box.style.borderTopRightRadius = `${tr}px`
			box.style.borderBottomRightRadius = `${br}px`
			box.style.borderBottomLeftRadius = `${bl}px`
		}
		if (radius.includes('%')) {
			let radius = e.target.value
			box.style.borderRadius = radius
		}
	}

	if (radius <= 1000) {
		box.style.borderRadius = `${radius}px`
	}
}

boxRadius?.addEventListener('change', (e) => {
	handlerSubmit(e)
})

btnCopy?.addEventListener('click', (e) => {
	let radius = box.style.borderRadius
	let cssStyles

	if (radius !== "") {
		cssStyles = 'border-radius: ' + radius + ';'
	} else {
		cssStyles = 'border-radius: 0px;'
	}

	navigator.clipboard.writeText(cssStyles).then(console.log('Copied!'))
})

btnSubmit?.addEventListener('click', (e) => {
	handlerSubmit(e)
})
