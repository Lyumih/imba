namespace $.$$ {

	export class $imba_clock extends $.$imba_clock {
		@ $mol_mem
		date(next?: any) {
			$mol_state_time.now(3000)
			const now = new $mol_time_moment()
			console.log(now)
			return next ?? now.merge({hour: this.utc()})
		}

		// @ $mol_mem
		hours() {
			return ( 360 / 12 ) * this.date().hour + 180
		}

		minutes() {
			return 360 / 60 * this.date().minute + 180
		}

		// @ $mol_mem
		seconds()	{
			return 360 / 60 * this.date().second + 180
		}
	}

	export class $imba_arrow extends $.$imba_arrow {
		style() {
			return {
				...super.style(),
				transform: `rotate(${this.deg()}deg)`,
			}
		}
	}
}
