import "./style.scss";

// Importación de la libreria
Vue.use(window.vuelidate.default);

// Importación de los validaciones a usar
const { required, minLength, email, requiredIf } = window.validators;

// Validacion Custom para Rut Chileno
const rutValido = (rut) => {
	if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut.replaceAll(".", ""))) {
		return false;
	} else {
		// Rut
		var tmp = rut.split("-");
		var digv = tmp[1];
		var rut = tmp[0].replaceAll(".", "");
		if (digv == "K") {
			digv = "k";
		}

		// Digito Verificador
		var T = rut;
		var M = 0;
		var S = 1;
		for (; T; T = Math.floor(T / 10)) {
			S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
		}
		var dv = S ? S - 1 : "k";

		if (digv == dv) {
			return true;
		} else {
			return false;
		}
	}
};

var app = new Vue({
	el: "#formIntermediario",
	delimiters: ["${", "}"],
	data: {
		campos: {
			nombre: "",
			apellido: "",
			email: "",
			rut: "",
			quierotarjeta: false,
			sucursal: "",
		},
	},
	validations: {
		// Configuración de las validaciones de cada campo
		campos: {
			nombre: { required, minLength: minLength(3) },
			apellido: { required, minLength: minLength(3) },
			email: { required, email },
			rut: { required, minLength: minLength(6), rutValido },
			sucursal: {
				required: requiredIf(function () {
					return this.campos.quierotarjeta;
				}),
			},
		},
	},
	methods: {
		// Función que formatea el rut
		formatRut() {
			const newRut = this.campos.rut
				.replaceAll(".", "")
				.replaceAll("-", "")
				.trim()
				.toLowerCase();
			const lastDigit = newRut.substr(-1, 1);
			const rutDigit = newRut.substr(0, newRut.length - 1);
			let format = "";
			for (let i = rutDigit.length; i > 0; i--) {
				const e = rutDigit.charAt(i - 1);
				format = e.concat(format);
				if (i % 3 === 0) {
					format = ".".concat(format);
				}
			}
			this.campos.rut = format.concat("-").concat(lastDigit);
		},
		// Función que copia los datos del formulario custom al formulario de modyo
		copiarDatos() {
			document.getElementById("first-name-14").value = this.campos.nombre;
			document.getElementById("last-name-14").value = this.campos.apellido;
			document.getElementById("email-14").value = this.campos.email;
			document.getElementById("answers_64_value").value = this.campos.rut;
			document.getElementById("answers_74_alternative_782").campos.checked =
				this.campos.quierotarjeta;
			document.getElementById("answers_76_value").value = this.campos.sucursal;
			document.getElementById("form-submit-14").click();
		},
		submitHandler() {
			if (this.$v.$invalid) {
				this.$v.$touch();
			} else {
				// this.copiarDatos();
			}
		},
	},
	mounted() {},
});
