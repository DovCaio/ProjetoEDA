"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecuperaCodigo = void 0;
var fs = require("fs");
/*

    Deve mover esse código para onde a api vai ficar, por questões de segurança, não podemos permitir
    que os arquivos do servidor sejam acessados diretamente, assim o ajax deve ser feito pensando numa
    api rest

*/
var RecuperaCodigo = /** @class */ (function () {
    function RecuperaCodigo(diretorio, idCodigo) {
        this.diretorio = diretorio;
        this.qualCodigo = idCodigo;
    }
    RecuperaCodigo.prototype.lerDiretorios = function (diretorio) {
        return new Promise(function (resolve, reject) {
            fs.readdir(diretorio, function (erro, diretorios) {
                if (erro) {
                    reject(erro);
                }
                resolve(diretorios);
            });
        });
    };
    RecuperaCodigo.prototype.procuraDiretorioCodigo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultado, diretorios, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        diretorios = [];
                        return [4 /*yield*/, this.lerDiretorios(this.diretorio)
                                .then(function (resultado) {
                                diretorios = resultado;
                            }).catch(function (erro) {
                                throw erro;
                            })
                            //Procura qual diretorio é apartir do id
                        ];
                    case 1:
                        _a.sent();
                        i = 0;
                        for (i; i < diretorios.length; i++) {
                            if (this.qualCodigo == i)
                                break;
                            i++;
                        }
                        resultado = this.diretorio + diretorios[i];
                        return [2 /*return*/, resultado];
                }
            });
        });
    };
    //Recupera os diretorios de cada codigo.
    RecuperaCodigo.prototype.recuperaDiretoriosCodigos = function (diretorioPrincipal) {
        return __awaiter(this, void 0, void 0, function () {
            var resultado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultado = [];
                        return [4 /*yield*/, this.lerDiretorios(diretorioPrincipal)
                                .then(function (resul) {
                                resul.forEach(function (element) {
                                    resultado.push(diretorioPrincipal + "/" + element);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, resultado];
                }
            });
        });
    };
    //Lê de forma sincrona.
    RecuperaCodigo.prototype.lerArquivos = function (diretoriosArquivo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var resposta = [];
                        diretoriosArquivo.forEach(function (element) {
                            //Recupera o nome do arquivo por meio do seu caminho.
                            function fazONome() {
                                var diretorioQuebrado = element.split("/");
                                return diretorioQuebrado[diretorioQuebrado.length - 1];
                            }
                            ;
                            var nomeArquivo = fazONome();
                            var conteudo = fs.readFileSync(element, "utf-8");
                            resposta.push([nomeArquivo, conteudo]);
                        });
                        resolve(resposta);
                    })];
            });
        });
    };
    RecuperaCodigo.prototype.recuperaCodigos = function (diretorio) {
        return __awaiter(this, void 0, void 0, function () {
            var resultado, diretoriosASeremLidos, erro_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultado = [];
                        diretoriosASeremLidos = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.recuperaDiretoriosCodigos(diretorio)];
                    case 2:
                        diretoriosASeremLidos = _a.sent();
                        return [4 /*yield*/, this.lerArquivos(diretoriosASeremLidos)];
                    case 3:
                        resultado = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        erro_1 = _a.sent();
                        throw erro_1;
                    case 5: return [2 /*return*/, resultado];
                }
            });
        });
    };
    RecuperaCodigo.prototype.lerCodigos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultado, diretorioAProcurar, erro_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultado = [];
                        diretorioAProcurar = "";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.procuraDiretorioCodigo()];
                    case 2:
                        diretorioAProcurar = _a.sent();
                        return [4 /*yield*/, this.recuperaCodigos(diretorioAProcurar)];
                    case 3:
                        resultado = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        erro_2 = _a.sent();
                        throw erro_2;
                    case 5: return [2 /*return*/, resultado];
                }
            });
        });
    };
    RecuperaCodigo.prototype.recupera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultado, erro_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultado = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.lerCodigos()];
                    case 2:
                        resultado = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        erro_3 = _a.sent();
                        throw erro_3;
                    case 4: return [2 /*return*/, resultado];
                }
            });
        });
    };
    RecuperaCodigo.prototype.setQualCodigo = function (idCod) {
        if (this.qualCodigo > 0) {
            this.qualCodigo = idCod;
        }
    };
    RecuperaCodigo.prototype.setDiretorio = function (diretorio) {
        this.diretorio = diretorio;
    };
    return RecuperaCodigo;
}());
exports.RecuperaCodigo = RecuperaCodigo;
