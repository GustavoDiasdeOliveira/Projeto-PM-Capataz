// ============================
// DADOS DOS CONCURSOS
// ============================
const concursos = {
  pmesp: {
    nome: "PMESP",
    topics: {
      portugues: [
        "Leitura e interpretação: textos literários e não literários",
        "Sinônimos e antônimos",
        "Sentido próprio e figurado das palavras",
        "Pontuação (vírgula, ponto, dois-pontos, etc.)",
        "Classes de palavras: substantivo",
        "Classes de palavras: adjetivo, numeral",
        "Classes de palavras: pronome, verbo",
        "Classes de palavras: advérbio, preposição, conjunção",
        "Concordância verbal e nominal",
        "Regência verbal e nominal",
        "Colocação pronominal",
        "Crase",
      ],
      matematica: [
        "Números inteiros: operações e propriedades",
        "Números racionais: fração e decimal",
        "Mínimo múltiplo comum",
        "Razão e proporção",
        "Porcentagem",
        "Regra de três simples",
        "Média aritmética simples",
        "Equação do 1º grau",
        "Sistema de equações do 1º grau",
        "Sistema métrico: medidas (tempo, comprimento, capacidade)",
        "Tabelas e gráficos: relação entre grandezas",
        "Geometria: forma, perímetro, área, volume, Pitágoras",
        "Raciocínio lógico",
        "Resolução de situações-problema",
      ],
      historiaGeral: [
        "Primeira Guerra Mundial",
        "Nazifascismo e Segunda Guerra Mundial",
        "A Guerra Fria",
        "Globalização e políticas neoliberais",
      ],
      historiaBrasil: [
        "Revolução de 1930 e Era Vargas",
        "As Constituições Republicanas",
        "Estrutura política e movimentos sociais no período militar",
        "Abertura política e redemocratização",
      ],
      geografiaGeral: [
        "Nova ordem mundial e espaço geopolítico",
        "Globalização (aspectos econômicos e culturais)",
        "Principais problemas ambientais",
      ],
      geografiaBrasil: [
        "Relevo e hidrografia brasileiros",
        "Clima e vegetação do Brasil",
        "População: crescimento, distribuição e movimentos",
        "Atividades econômicas: indústria, urbanização, energia, agropecuária",
        "Impactos ambientais no Brasil",
      ],
      atualidades: [
        "Acompanhar notícias dos últimos 6 meses (fatos nacionais e internacionais) - prática de resumo",
      ],
      informatica: [
        "Windows 10: pastas, diretórios, atalhos, manipulação de arquivos",
        "Word 2016: edição e formatação, cabeçalhos, parágrafos, tabelas",
        "Excel 2016: fórmulas, funções, tabelas e gráficos",
        "PowerPoint 2016: slides, animações e apresentação",
        "Correio eletrônico: envio e anexos",
        "Internet: URL, links, busca e impressão",
        "Google Workspace e Microsoft Teams: conceitos básicos",
      ],
      administracao: [
        "Constituição Federal: Direitos e Garantias Fundamentais (Tít. II)",
        "Constituição Federal: Organização do Estado e Administração Pública (Tít. III)",
        "Constituição Federal: Defesa do Estado e Segurança Pública (Tít. V)",
        "Constituição do Estado de SP: Organização dos Poderes e Segurança Pública",
        "Lei 12.527/11 (Acesso à Informação) e Decreto 68.155/23",
      ]
    },
    weeklyPattern: {
      Segunda: ["portugues", "matematica", "portugues", "matematica"],
      Terça: ["historiaGeral", "geografiaGeral", "historiaBrasil", "geografiaBrasil"],
      Quarta: ["portugues", "matematica", "portugues", "matematica"],
      Quinta: ["administracao", "informatica", "administracao", "informatica"],
      Sexta: ["historiaBrasil", "geografiaBrasil", "atualidades", "revisao"],
      Sábado: ["revisao_port", "revisao_mat", "revisao_hg", "simulado"],
    }
  },

    capatazia: {
    nome: "Capatazia - Santos OGMO",
    topics: {
      portugues: [
        "Compreensão e interpretação de texto",
        "Ortografia e Acentuação (Novo Acordo Ortográfico)",
        "Sinais de Pontuação",
        "Semântica: sinônimos, antônimos, homônimos, parônimos, denotação e conotação",
        "Classes de palavras: substantivo, adjetivo, verbo, advérbio, artigo, preposição, conjunção, interjeição, numeral e pronomes",
        "Divisão silábica",
        "Sintaxe: frase, oração e períodos",
        "Tempos verbais e concordância verbal e nominal"
      ],
      matematica: [
        "Operações com números racionais: adição, subtração, multiplicação, divisão, potenciação e radiciação",
        "Regra de três simples",
        "Sistemas de medida: tempo, comprimento, quantidade",
        "Teoria dos números: divisibilidade, MMC, MDC, números primos, pares e ímpares, fatoração numérica",
        "Porcentagem e problemas aplicados"
      ],
      ingles: [
        "Compreensão e interpretação de texto em inglês",
        "Vocabulário fundamental e técnico marítimo",
        "Gramática básica: verbos, pronomes, preposições e tempos simples",
        "Funções sociais da língua (saudações, pedidos, instruções)",
        "Compreensão de pequenos diálogos"
      ],
      informatica: [
        "Conceitos de hardware e software",
        "Principais componentes e funcionamento básico do computador",
        "Sistema Operacional Windows",
        "Internet: navegação, links, URLs, busca e impressão",
        "Word 2019: formatação, bordas, cabeçalho, tabelas, imagens, numeração e parágrafos",
        "Excel 2019: fórmulas, quatro operações, gráficos e formatação condicional",
        "Segurança digital: antivírus, firewall, anti-spyware",
        "Correio eletrônico (e-mail)"
      ],
      legislacaoPortuaria: [
        "Lei 7.418/1985 - Vale Transporte",
        "Lei 9.719/1998 - Normas e condições do trabalho portuário",
        "Lei 12.815/2013 - Exploração de portos e atividades portuárias",
        "Decreto 8.033/2013 - Regulamentação da Lei 12.815/13",
        "Decreto 10.088/2019 - Convenções da OIT (Segurança e Saúde Portuária)"
      ],
      conhecimentosEspecificos: [
        "1. Tipos de Cargas: Classificação e características das mercadorias/cargas; Conceituação de mercadoria e carga e suas diferenças; Classificação das mercadorias e cargas.",
        "2. Cargas/mercadorias Perigosas: Conceito; Classificação; Medidas a serem tomadas no manuseio de mercadorias/cargas perigosas.",
        "3. Operações de Movimentação de Cargas: Equipamentos para a movimentação de cargas; Acessórios para movimentação de cargas; Guindaste; Empilhadeiras; Esteiras transportadoras; Portêineres e pontes rolantes.",
        "4. Normas Regulamentadoras: NR-6 - Equipamento de Proteção Individual – EPI; NR-11 - Transporte, movimentação, armazenagem e manuseio de materiais; NR-12 - Segurança no trabalho em máquinas e equipamentos; NR 29 - Segurança e Saúde no Trabalho Portuário."
      ]
    },

    weeklyPattern: {
      Segunda: ["portugues", "matematica", "informatica"],
      Terça: ["portugues", "legislacaoPortuaria", "ingles"],
      Quarta: ["matematica", "informatica", "portugues"],
      Quinta: ["legislacaoPortuaria", "portugues", "ingles"],
      Sexta: ["matematica", "informatica", "conhecimentosEspecificos"],
      Sábado: ["revisao_port", "revisao_mat", "revisao_leg", "revisao_esp", "simulado"]
    }
  },

};

// ============================
// CONFIGURAÇÕES GLOBAIS
// ============================
const WEEKS = 8; // de 26/09 até 02/11
const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const BLOCKS = ["07:00 – 08:45","09:00 – 10:45","11:00 – 12:45","13:00 – 14:45"];

// estado
let mode = "single"; // 'single' ou 'combinado'
let currentConcurso = "pmesp";
let plan = {};
let iter = {}; // iteradores por matéria no concurso atual

// ========= helpers de storage =========
function storageKey() {
  return `cronograma_state_${currentConcurso}_${mode}`;
}
function saveState(state){ localStorage.setItem(storageKey(), JSON.stringify(state)); }
function loadState(){ try { return JSON.parse(localStorage.getItem(storageKey()) || "{}"); } catch { return {}; } }

// ========= seleção e inicialização =========
document.getElementById("selectConcurso").addEventListener("change", (e) => {
  const val = e.target.value;
  if (val === "combinado") {
    mode = "combinado";
    // default to pmesp as base, but combinado usa ambos
    currentConcurso = "combinado";
  } else {
    mode = "single";
    currentConcurso = val;
  }
  setConcurso(currentConcurso);
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const menu = document.querySelector(".topbar-controls");
  menu.classList.toggle("open");
  const icon = document.querySelector("#menuToggle i");
  icon.className = menu.classList.contains("open") ? "bi bi-x" : "bi bi-list";
});

// theme
function toggleTheme(save=true){
  const body=document.body;
  const current = body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  body.setAttribute("data-theme", next);
  const icon = document.querySelector("#toggleTheme i");
  icon.className = next === "dark" ? "bi bi-sun" : "bi bi-moon";
  if (save) localStorage.setItem("theme", next);
}
document.getElementById("toggleTheme").addEventListener("click", ()=>toggleTheme());
document.addEventListener("DOMContentLoaded", ()=>{
  const saved = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", saved);
  const icon = document.querySelector("#toggleTheme i");
  icon.className = saved === "dark" ? "bi bi-sun" : "bi bi-moon";
});

// ========= construção do plano =========
function buildCombinedTopics(){
  // junta tópicos por chave entre os dois concursos (une arrays evitando duplicates)
  const combined = {};
  for (const c of ["pmesp", "capatazia"]) {
    const t = concursos[c].topics;
    for (const key in t) {
      if (!combined[key]) combined[key] = [];
      t[key].forEach(item => {
        if (!combined[key].includes(item)) combined[key].push(item);
      });
    }
  }
  return combined;
}

function buildCombinedPattern(){
  // cria um padrão semanal que mistura as matérias mais relevantes de ambos os concursos
  return {
    Segunda: ["portugues", "matematica", "informatica", "administracao"],
    Terça: ["historiaGeral", "geografiaGeral", "legislacaoPortuaria", "ingles"],
    Quarta: ["portugues", "matematica", "informatica", "historiaBrasil"],
    Quinta: ["legislacaoPortuaria", "portugues", "conhecimentosEspecificos", "geografiaBrasil"],
    Sexta: ["matematica", "informatica", "atualidades", "conhecimentosEspecificos"],
    Sábado: ["revisao_port", "revisao_mat", "revisao_leg", "simulado"]
  };
}


function setConcurso(conc){
  // prepara iteradores e plano
  if (conc === "combinado") {
    currentConcurso = "combinado";
    iter = {};
    const combined = buildCombinedTopics();
    Object.keys(combined).forEach(k => iter[k]=0);
    generatePlan(); renderWeeks(); updateOverall(); document.getElementById("programSummary").textContent = buildProgramSummary();
  } else {
    currentConcurso = conc;
    iter = {};
    Object.keys(concursos[conc].topics).forEach(k => iter[k]=0);
    generatePlan();
    renderWeeks();
    updateOverall();
    document.getElementById("programSummary").textContent = buildProgramSummary();
  }
}

// nextTopic (usa o conjunto correto de topics)
function nextTopic(subject){
  if (subject === "revisao" || subject === "simulado" || subject.startsWith("revisao")) return subject;
  let topicsSet;
  if (currentConcurso === "combinado") topicsSet = buildCombinedTopics();
  else topicsSet = concursos[currentConcurso].topics;
  const arr = topicsSet[subject];
  if (!arr) return "Tópico geral";
  if (!iter[subject]) iter[subject]=0;
  const i = iter[subject] % arr.length;
  iter[subject]++;
  return arr[i];
}

function generatePlan(){
  plan = {};
  for (let w=1; w<=WEEKS; w++){
    plan[w] = {};
    for (const day of DAYS){
      plan[w][day] = [];
      // pick weekly pattern
      let pattern;
      if (currentConcurso === "combinado") pattern = buildCombinedPattern();
      else pattern = concursos[currentConcurso].weeklyPattern;
      const subjects = pattern[day] || [];
      for (const s of subjects){
        if (s === "revisao_port") {
          plan[w][day].push({ time: BLOCKS[0], topic: "Revisão Português (questões)" });
        } else if (s === "revisao_mat") {
          plan[w][day].push({ time: BLOCKS[1], topic: "Revisão Matemática (questões)" });
        } else if (s === "revisao_transito" || s === "revisao_hg") {
          const t = s === "revisao_transito" ? "Revisão Trânsito (questões)" : "Revisão História/Geografia";
          plan[w][day].push({ time: BLOCKS[2], topic: t });
        } else if (s === "simulado") {
          plan[w][day].push({ time: BLOCKS[3], topic: "Simulado completo (mistura de disciplinas) — Sem tempo" });
        } else {
          plan[w][day].push({ time: BLOCKS[plan[w][day].length], topic: nextTopic(s) });
        }
      }
    }
  }
}

// ============================
// RENDER / UI
// ============================
function renderWeeks(){
  const tabs = document.getElementById("weeks");
  tabs.innerHTML = "";
  for (let w=1; w<=WEEKS; w++){
    const btn = document.createElement("button");
    btn.className = "week-btn";
    btn.textContent = "Semana " + w;
    btn.onclick = () => selectWeek(w);
    tabs.appendChild(btn);
  }
  selectWeek(1);
}

function selectWeek(week){
  document.querySelectorAll(".week-btn").forEach((b,i)=> b.classList.toggle("active", i===week-1));
  const container = document.getElementById("weekContent");
  container.innerHTML = "";
  const state = loadState();
  const weekData = plan[week];

  const grid = document.createElement("div"); grid.className = "day-grid";
  for (const day of DAYS){
    const card = document.createElement("div"); card.className = "day";
    const h = document.createElement("h3"); h.textContent = day; card.appendChild(h);
    for (const b of weekData[day]){
      const id = `w${week}_${day}_${b.time}`.replace(/\s|–|:/g,"_") + `_${currentConcurso}_${mode}`;
      const div = document.createElement("div"); div.className = "block";
      const t = document.createElement("time"); t.textContent = b.time; div.appendChild(t);
      const label = document.createElement("label"); label.innerHTML = `<strong>${b.topic}</strong>`; div.appendChild(label);
      const chk = document.createElement("input"); chk.type = "checkbox"; chk.id = id;
      if (state[id]) chk.checked = true;
      chk.onchange = () => { state[id] = chk.checked; saveState(state); updateProgress(week); updateOverall(); };
      div.appendChild(chk);
      card.appendChild(div);
    }
    grid.appendChild(card);
  }
  container.appendChild(grid);
  updateProgress(week);
}

function updateProgress(week){
  const state = loadState();
  const weekData = plan[week];
  let total=0, done=0;
  for (const day of DAYS){
    for (const b of weekData[day]){
      total++;
      const id = `w${week}_${day}_${b.time}`.replace(/\s|–|:/g,"_") + `_${currentConcurso}_${mode}`;
      if (state[id]) done++;
    }
  }
  const pct = total ? Math.round((done/total)*100) : 0;
  document.getElementById("progressBar").style.width = pct+"%";
  document.getElementById("progressText").textContent = `${done}/${total} blocos concluídos (${pct}%)`;
}

function updateOverall(){
  const state = loadState();
  let total=0, done=0;
  for (let w=1; w<=WEEKS; w++){
    for (const day of DAYS){
      for (const b of plan[w][day]){
        total++;
        const id = `w${w}_${day}_${b.time}`.replace(/\s|–|:/g,"_") + `_${currentConcurso}_${mode}`;
        if (state[id]) done++;
      }
    }
  }
  const pct = total ? Math.round((done/total)*100) : 0;
  document.getElementById("overall").textContent = `${done}/${total} blocos concluídos no total — Progresso: ${pct}%`;
}

// ============================
// CONTROLES GERAIS
// ============================
document.addEventListener("click", (e) => {
  const state = loadState();
  const targetId = e.target.id;

  if (targetId === "markWeek") {
    const current = Number(document.querySelector(".week-btn.active").textContent.replace("Semana ",""));
    for (const day of DAYS) {
      for (const b of plan[current][day]) {
        const id = `w${current}_${day}_${b.time}`.replace(/\s|–|:/g,"_") + `_${currentConcurso}_${mode}`;
        state[id] = true;
      }
    }
    saveState(state);
    selectWeek(current);
    updateOverall();
  }

  if (targetId === "clearWeek") {
    const current = Number(document.querySelector(".week-btn.active").textContent.replace("Semana ",""));
    for (const day of DAYS) {
      for (const b of plan[current][day]) {
        const id = `w${current}_${day}_${b.time}`.replace(/\s|–|:/g,"_") + `_${currentConcurso}_${mode}`;
        delete state[id];
      }
    }
    saveState(state);
    selectWeek(current);
    updateOverall();
  }

  if (targetId === "resetAll") {
    if (confirm("Tem certeza? Isso vai apagar todo o progresso salvo localmente para este modo/concurso.")) {
      // remove only keys matching this storageKey prefix
      localStorage.removeItem(storageKey());
      location.reload();
    }
  }

  if (targetId === "exportCsv") exportCSV();
  if (targetId === "toggleAllReminders") {
    const el = document.getElementById("programSummary");
    el.textContent = buildProgramSummary();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  if (targetId === "toggleTheme") toggleTheme();
});

// search
document.getElementById("search").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) {
    document.querySelectorAll(".block").forEach((b) => (b.style.display = "flex"));
    return;
  }
  document.querySelectorAll(".block").forEach((b) => {
    const text = b.querySelector("label").innerText.toLowerCase();
    b.style.display = text.includes(q) ? "flex" : "none";
  });
});

// build program summary (para painel lateral)
function buildProgramSummary(){
  let s = `== Concurso: ${ currentConcurso === 'combinado' ? 'Modo Combinado' : concursos[currentConcurso].nome } ==\n\n`;
  let topicsSet = (currentConcurso==='combinado') ? buildCombinedTopics() : concursos[currentConcurso].topics;
  for (const key in topicsSet){
    s += `== ${key.toUpperCase()} ==\n${topicsSet[key].join("\n")}\n\n`;
  }
  s += "== Observação ==\nSábados são reservados para revisão e simulados completos.";
  return s;
}

// CSV export
function exportCSV(){
  let rows = ["Semana,Dia,Horário,Conteúdo,Concluído"];
  const state = loadState();
  for (let w=1; w<=WEEKS; w++){
    for (const day of DAYS){
      for (const b of plan[w][day]){
        const id = `w${w}_${day}_${b.time}`.replace(/\s|–|:/g,"_") + `_${currentConcurso}_${mode}`;
        const done = state[id] ? "SIM" : "NAO";
        rows.push([w, day, b.time, '"' + b.topic.replace(/"/g,'""') + '"', done].join(","));
      }
    }
  }
  const csv = rows.join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cronograma_${currentConcurso}_${mode}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ============================
// INICIALIZAÇÃO
// ============================
setConcurso("pmesp"); // default
document.getElementById("programSummary").textContent = buildProgramSummary();
