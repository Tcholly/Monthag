const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const profile = urlParams.get('profile');
console.log(profile)

const profileData = {}
profileData["Maxim"] = { 
	nome : "Max",
	indirizzo : '<a href="https://www.google.com/maps/place/Via+Caratti+14,+6500+Bellinzona/">Via Caratti 14, Bellinzona</a>',
	orario : `
        <tr>
            <th class="hour"> 08:05 - 08:50 </th>
            <th class="ingle"> Inglese - D171 </th>
            <th class="os"> Os - B124</th>
            <th class="oc"> Oc - Aula info</th>
            <th class="os"> Os </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 08:55 - 09:40 </th>
            <th class="ingle"> Inglese </th>
            <th class="os"> Os </th>
            <th class="oc"> Oc </th>
            <th class="os"> Os </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 09:55 - 10:40 </th>
            <th class="ecdi"> EcDi - D164</th>
            <th class="tede"> Tedesco - D165</th>
            <th class="os"> Os - B129</th>
            <th class="ita"> Italiano - C150</th>
            <th class="stor"> Storia - B128</th>
        </tr>

        <tr>
            <th class="hour"> 10:45 - 11:30 </th>
            <th class="ecdi"> EcDi </th>
            <th class="pause"> </th>
            <th class="geo"> Geografia - B129 </th>
            <th class="ita"> Italiano </th>
            <th class="stor"> Storia </th>
        </tr>

        <tr>
            <th class="hour"> 11:35 - 12:15 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="geo"> Geografia </th>
            <th class="pause"> </th>
            <th class="orcl"> OrCl - B128</th>
        </tr>
        
        <tr>
            <th class="hour"> 12:20 - 13:05 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="ingle"> Inglese - D171</th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 13:10 - 13:55 </th>
            <th class="tede"> Tedesco - D172</th>
            <th class="ita"> Italiano - D172</th>
            <th class="mate"> Matematica - C41</th>
            <th class="mate"> Matematica - C41 </th>
            <th class="ginna"> Ginna </th>
        </tr>

        <tr>
            <th class="hour"> 14:00 - 14:45 </th>
            <th class="tede"> Tedesco </th>
            <th class="ita"> Italiano </th>
            <th class="mate"> Mate </th>
            <th class="mate"> Mate </th>
            <th class="ginna"> Ginna </th>
        </tr>

        <tr>
            <th class="hour"> 14:55 - 15:40 </th>
            <th class="filo"> Filosofia - B131 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="happy"> Teatro </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 15:45 - 16:30 </th>
            <th class="filo"> Filosofia </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="happy"> Teatro </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 16:35 - 17:20</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>
	`,
	classe : "4G"
};
profileData["Lautaro"] = {
	nome : "Lauti",
	indirizzo : '<a href="https://www.google.com/maps/place/Via+Pradasc+7,+6514+Sementina/">Via Pradasc 7, Sementina</a>',
	orario : `
        <tr>
            <th class="hour"> 08:05 - 08:50 </th>
            <th class="filo"> Filosofia - B124 </th>
            <th class="os"> Os - D72</th>
            <th class="oc"> Oc - D161 </th>
            <th class="os"> Os - B131 </th>
            <th class="fra"> Francese - B121 </th>
        </tr>

        <tr>
            <th class="hour"> 08:55 - 09:40 </th>
            <th class="filo"> Filosofia</th>
            <th class="os"> Os </th>
            <th class="oc"> Oc </th>
            <th class="os"> Os </th>
            <th class="fra"> Francese </th>
        </tr>

        <tr>
            <th class="hour"> 09:55 - 10:40 </th>
            <th class="geo"> Geografia - B132</th>
            <th class="pause"> </th>
            <th class="ita"> Italiano - C148</th>
            <th class="ita"> Italiano - C148 </th>
            <th class="mate"> Matematica - B24</th>
        </tr>

        <tr>
            <th class="hour"> 10:45 - 11:30 </th>
            <th class="geo"> Geografia </th>
            <th class="pause"> </th>
            <th class="ita"> Italiano </th>
            <th class="ita"> Italiano </th>
            <th class="mate"> Matematica </th>
        </tr>

        <tr>
            <th class="hour"> 11:35 - 12:20 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>
        
        <tr>
            <th class="hour"> 12:20 - 13:05 </th>
            <th class="pause"> </th>
            <th class="fra"> Francese - B121</th>
            <th class="pause"> </th>
            <th class="tede"> Tedesco - D162</th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 13:10 - 13:55 </th>
            <th class="os"> Os - C42</th>
            <th class="stor"> Storia - B129</th>
            <th class="ecdi"> EcDi - B129</th>
            <th class="mate"> Matematica - B24</th>
            <th class="ginna"> Ginna </th>
        </tr>

        <tr>
            <th class="hour"> 14:00 - 14:45 </th>
            <th class="os"> Os - D72 </th>
            <th class="stor"> Storia</th>
            <th class="ecdi"> EcDi</th>
            <th class="mate"> Matematica</th>
            <th class="ginna"> Ginna</th>
        </tr>

        <tr>
            <th class="hour"> 14:55 - 15:40 </th>
            <th class="mate"> Matematica - C42</th>
            <th class="pause"> </th>
            <th class="tede"> Tedesco - D162</th>
            <th class="happy"> Teatro </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 15:45 - 16:30 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="tede"> Tedesco </th>
            <th class="tede"> Teatro</th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 16:35 - 17:20</th>
            <th class="pause"></th>
            <th class="pause"></th>
            <th class="orcl"> OrCl </th>
            <th class="pause"></th>
            <th class="pause"></th>
        </tr>
        `, 
	classe : "4D"
};
profileData["Febo"] = {
	nome : "Feb Sheeran",
	indirizzo : '<a href="https://www.google.com/maps/place/El+Törc+12,+6513+Monte+Carasso/">El Törc 12, Sementina</a>',
	orario : `
        <tr>
            <th class="hour"> 08:05 - 08:50 </th>
            <th class="pause"> </th>
            <th class="ginna"> Ginna </th>
            <th class="oc"> Oc </th>
            <th class="stor"> Storia - B128 </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 08:55 - 09:40 </th>
            <th class="pause"> </th>
            <th class="ginna"> Ginna </th>
            <th class="oc"> Oc </th>
            <th class="stor"> Storia </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 09:55 - 10:40 </th>
            <th class="filo"> Filosofia - B124 </th>
            <th class="mate"> Mate - B33</th>
            <th class="ecdi"> EcDi - B132 </th>
            <th class="mate"> Matematica - C142 </th>
            <th class="ita"> Italiano - C147 </th>
        </tr>

        <tr>
            <th class="hour"> 10:45 - 11:30 </th>
            <th class="filo"> Filosofia </th>
            <th class="mate"> Matematica </th>
            <th class="ecdi"> EcDi </th>
            <th class="mate"> Matematica </th>
            <th class="ita"> Italiano</th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 11:35 - 12:20 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>
        
        <tr>
            <th class="hour"> 12:20 - 13:05 </th>
            <th class="pause"> </th>
            <th class="orcl"> OrCl - D62</th>
            <th class="os"> Os - D125</th>
            <th class="tede"> Tedesco - D164</th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 13:10 - 13:55 </th>
            <th class="os"> Os - B125</th>
            <th class="ita"> Italiano - D62</th>
            <th class="ingle"> Inglese - D171</th>
            <th class="geo"> Geografia - B131</th>
            <th class="tede"> Tedesco - D164</th>
        </tr>

        <tr>
            <th class="hour"> 14:00 - 14:45 </th>
            <th class="os"> Os </th>
            <th class="ita"> Italiano </th>
            <th class="ingle"> Inglese </th>
            <th class="geo"> Geografia </th>
            <th class="tede"> Tedesco </th>
        </tr>

        <tr>
            <th class="hour"> 14:55 - 15:40 </th>
            <th class="ingle"> Inglese - D171</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="os"> Os - B124 </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 15:45 - 16:30 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="os"> Os</th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 16:35 - 17:20</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>`, 
	classe : "4D"
};
profileData["Gionata"] = {
	nome : "Gionny",
	indirizzo : '1)<a href="https://www.google.com/maps/place/Via+Tre+Cappelle+7,+6517+Arbedo/"> Via 3 Capelle 7, Arbedo</a>\n2) <a href="https://www.google.com/maps/place/Via+Altirolo+68,+6745+Giornico/"> Via Altirolo 68, Giornico</a>',
	orario : `
        <tr>
            <th class="hour"> 08:05 - 08:50 </th>
            <th class="filo"> Filosofia - B124 </th>
            <th class="os"> Os - D72</th>
            <th class="oc"> Oc - D161 </th>
            <th class="os"> Os - B131 </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 08:55 - 09:40 </th>
            <th class="filo"> Filosofia</th>
            <th class="os"> Os </th>
            <th class="oc"> Oc </th>
            <th class="os"> Os </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 09:55 - 10:40 </th>
            <th class="geo"> Geografia - B132</th>
            <th class="ingle"> Inglese</th>
            <th class="ita"> Italiano - C148</th>
            <th class="ita"> Italiano - C148 </th>
            <th class="mate"> Matematica - B24</th>
        </tr>

        <tr>
            <th class="hour"> 10:45 - 11:30 </th>
            <th class="geo"> Geografia </th>
            <th class="ingle"> Inglese</th>
            <th class="ita"> Italiano </th>
            <th class="ita"> Italiano </th>
            <th class="mate"> Matematica </th>
        </tr>

        <tr>
            <th class="hour"> 11:35 - 12:20 </th>
            <th class="ingle"> Inglese</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>
        
        <tr>
            <th class="hour"> 12:20 - 13:05 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="tede"> Tedesco - D162</th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 13:10 - 13:55 </th>
            <th class="os"> Os - C42</th>
            <th class="stor"> Storia - B129</th>
            <th class="ecdi"> EcDi - B129</th>
            <th class="mate"> Matematica - B24</th>
            <th class="ginna"> Ginna </th>
        </tr>

        <tr>
            <th class="hour"> 14:00 - 14:45 </th>
            <th class="os"> Os - D72 </th>
            <th class="stor"> Storia</th>
            <th class="ecdi"> EcDi</th>
            <th class="mate"> Matematica</th>
            <th class="ginna"> Ginna</th>
        </tr>

        <tr>
            <th class="hour"> 14:55 - 15:40 </th>
            <th class="mate"> Matematica - C42</th>
            <th class="pause"> </th>
            <th class="tede"> Tedesco - D162</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 15:45 - 16:30 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="tede"> Tedesco </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 16:35 - 17:20</th>
            <th class="pause"></th>
            <th class="pause"></th>
            <th class="orcl"> OrCl </th>
            <th class="pause"></th>
            <th class="pause"></th>
        </tr>`,
	classe : "4D"
};
profileData["Emanuel"] = {
	nome : "Ema",
	indirizzo : '<a href="https://www.google.com/maps/place/Via+Canonico+Ghiringhelli+6,+6500+Bellinzona/">Via Canonico Ghiringhelli 6, Bellinzona</a>',
	orario : `
        <tr>
          <th class="hour"> 08:05 - 08:50 </th>
          <th class="tede"> Tedesco - D165</th>
          <th class="os"> Os - D72</th>
          <th class="oc"> Oc - Aula info</th>
          <th class="os"> Os - B131</th>
          <th class="stor"> Storia - B132</th>
        </tr>

        <tr>
            <th class="hour"> 08:55 - 09:40 </th>
            <th class="tede"> Tedesco</th>
            <th class="os"> Os</th>
            <th class="oc"> Oc </th>
            <th class="os"> Os</th>
            <th class="stor"> Storia</th>
        </tr>

        <tr>
            <th class="hour"> 09:55 - 10:40 </th>
            <th class="ecdi"> EcDi - B122</th>
            <th class="ingle"> Inglese D164</th>
            <th class="mate"> Matematica - D62</th>
            <th class="ingle"> Inglese - D172</th>
            <th class="geo"> Geografia - D168</th>
        </tr>

        <tr>
            <th class="hour"> 10:45 - 11:30 </th>
            <th class="ecdi"> EcDi </th>
            <th class="tede"> Tedesco - D162</th>
            <th class="mate"> Matematica </th>
            <th class="ingle"> Inglese</th>
            <th class="geo"> Geografia </th>
        </tr>

        <tr>
            <th class="hour"> 11:35 - 12:20 </th>
            <th class="mate"> Matematica - D62</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>
        
        <tr>
            <th class="hour"> 12:20 - 13:05 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="orcl"> OrCl - B128 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 13:10 - 13:55 </th>
            <th class="os"> Os - C42 </th>
            <th class="filo"> Filosofia - B25</th>
            <th class="ita"> Italiano - C144</th>
            <th class="mate"> Matematica - D62</th>
            <th class="ita"> Italiano - C144</th>
        </tr>

        <tr>
            <th class="hour"> 14:00 - 14:45 </th>
            <th class="os"> Os - D72 </th>
            <th class="filo"> Filosofia </th>
            <th class="ita"> Italiano </th>
            <th class="mate"> Matematica </th>
            <th class="ita"> Italiano </th>
        </tr>

        <tr>
            <th class="hour"> 14:55 - 15:40 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="happy"> Teatro </th>
            <th class="ginna"> Ginna </th>
        </tr>

        <tr>
            <th class="hour"> 15:45 - 16:30 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="happy"> Teatro </th>
            <th class="ginna"> Ginna </th>
        </tr>

        <tr>
            <th class="hour"> 16:35 - 17:20</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>`,
	classe : "4?"
};
profileData["Philip"] = {
	nome : "Philip",
	indirizzo : '<a href="https://goo.gl/maps/zcYowkEN1mQ5z2J78">Moleno 4, Moleno</a>',
	orario : `
          <tr>
              <th class="hour"> 08:05 - 08:50 </th>
              <th class="bio"> Biologia - B25 </th>
              <th class="stor"> Storia - B131 </th>
              <th class="mate"> Matematica - C142 </th>
              <th class="ita"> Italiano - C148 </th>
              <th class="ginna"> Ginna </th>
          </tr>
  
          <tr>
              <th class="hour"> 08:55 - 09:40 </th>
              <th class="fisica"> Biologia </th>
              <th class="stor"> Storia </th>
              <th class="mate"> Matematica </th>
              <th class="ita"> Italiano </th>
              <th class="ginna"> Ginna </th>
          </tr>
  
          <tr>
              <th class="hour"> 09:55 - 10:40 </th>
              <th class="mate"> Matematica - D73 </th>
              <th class="geo"> Geografia - C45</th>
              <th class="oc"> Oc - D61</th>
              <th class="os"> Os - B125</th>
              <th class="ita"> Italiano - D161</th>
          </tr>
  
          <tr>
              <th class="hour"> 10:45 - 11:30 </th>
              <th class="mate"> Matematica - D73 </th>
              <th class="geo"> Geografia </th>
              <th class="oc"> Oc </th>
              <th class="os"> Os </th>
              <th class="ita"> Italiano </th>
          </tr>
  
          <tr>
              <th class="hour"> 11:35 - 12:20 </th>
              <th class="pause"> </th>
              <th class="geo"> Geografia </th>
              <th class="pause"> </th>
              <th class="pause"> </th>
              <th class="pause"> </th>
          </tr>
          
          <tr>
              <th class="hour"> 12:20 - 13:05 </th>
              <th class="fisica"> Fisica - D61</th>
              <th class="pause"> </th>
              <th class="pause"> </th>
              <th class="pause"> </th>
              <th class="bio"> Biologia - B25</th>
          </tr>
  
          <tr>
              <th class="hour"> 13:10 - 13:55 </th>
              <th class="filo"> Filosofia - A102</th>
              <th class="os"> Os - B124 </th>
              <th class="fisica"> Fisica - D61</th>
              <th class="ingle"> Inglese - D165</th>
              <th class="tede"> Tedesco - D165</th>
          </tr>
  
          <tr>
              <th class="hour"> 14:00 - 14:45 </th>
              <th class="filo"> Filosofia </th>
              <th class="os"> Os </th>
              <th class="fisica"> Fisica </th>
              <th class="ingle"> Inglese </th>
              <th class="tede"> Tedesco </th>
          </tr>
  
          <tr>
              <th class="hour"> 14:55 - 15:40 </th>
              <th class="pause"> </th>
              <th class="lam"> Lam </th>
              <th class="bio"> Biologia - B25</th>
              <th class="pause"> </th>
              <th class="ingle"> Inglese - D171</th>
          </tr>
  
          <tr>
              <th class="hour"> 15:45 - 16:30 </th>
              <th class="pause"> </th>
              <th class="lam"> Lam </th>
              <th class="tede"> Tedesco - D169</th>
              <th class="pause"> </th>
              <th class="pause"> </th>
          </tr>
  
          <tr>
              <th class="hour"> 16:35 - 17:20</th>
              <th class="pause"> </th>
              <th class="pause"> </th>
              <th class="orcl"> OrCl </th>
              <th class="pause"> </th>
              <th class="pause"> </th>
          </tr>
	`,
	classe : "3?"
};
profileData["Matteo"] = {
	nome : "Matte",
	indirizzo : '<a href="https://www.google.com/maps/place/Via+Pizzo+Corgella+8,+6592+Sant\'Antonino/">Via Pizzo Corgella 8, Sant\'Antonino</a>',
	orario : `
        <tr>
            <th class="hour"> 08:05 - 08:50 </th>
            <th class="ita"> Italiano - C148 </th>
            <th class="pause">  </th>
            <th class="oc"> Oc - ? </th>
            <th class="os"> Os - B33 </th>
            <th class="filo"> Filosofia - B124 </th>
        </tr>

        <tr>
            <th class="hour"> 08:55 - 09:40 </th>
            <th class="ita"> Italiano </th>
            <th class="os"> Os </th>
            <th class="oc"> Oc </th>
            <th class="os"> Os </th>
            <th class=" filo"> Filosofia </th>
        </tr>

        <tr>
            <th class="hour"> 09:55 - 10:40 </th>
            <th class="mate"> Matematica - C143 </th>
            <th class="stor"> Storia - B12 </th>
            <th class="pause">  </th>
            <th class="mate"> Matematica - C41 </th>
            <th class="ingle"> Inglese - D169 </th>
        </tr>

        <tr>
            <th class="hour"> 10:45 - 11:30 </th>
            <th class="mate"> Matematica </th>
            <th class="stor"> Storia </th>
            <th class="fra"> Francese - B12 </th>
            <th class="mate"> Matematica </th>
            <th class="ingle"> Inglese </th>
        </tr>

        <tr>
            <th class="hour"> 11:35 - 12:20 </th>
            <th class="orcl"> OrCl - ? </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>
        
        <tr>
            <th class="hour"> 12:20 - 13:05 </th>
            <th class="pause"> </th>
            <th class="mate"> Matematica - C14 </th>
            <th class="os"> Os - C44 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 13:10 - 13:55 </th>
            <th class="os"> Os - C44 </th>
            <th class="fra"> Francese - C148</th>
            <th class="ita"> Italiano - C141</th>
            <th class="ecdi"> EcDi - B132 </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 14:00 - 14:45 </th>
            <th class="os"> Os </th>
            <th class="fra"> Francese </th>
            <th class="ita"> Italiano </th>
            <th class="ecdi"> EcDi </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 14:55 - 15:40 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="geo"> Geografia - B12</th>
            <th class="pause"> </th>
            <th class="ginna"> Ginna </th>
        </tr>

        <tr>
            <th class="hour"> 15:45 - 16:30 </th>
            <th class="ingle"> Inglese - D16</th>
            <th class="pause"> </th>
            <th class="geo"> Geografia </th>
            <th class="pause"> </th>
            <th class="ginna"> Ginna </th>
        </tr>

        <tr>
            <th class="hour"> 16:35 - 17:20</th>
            <th class="pause"></th>
            <th class="pause"></th>
            <th class="pause"></th>
            <th class="pause"></th>
            <th class="pause"></th>
        </tr>
	`,
	classe : "4?"
};
profileData["Diellon"] = {
	nome : "Diellon",
	indirizzo : '<a href="https://www.google.com/maps/place/Via+G.+Motta+4,+6710+Biasca/">Via G. Motta 4, Biasca</a> <h3>(non venite mai o vi spara mio padre)</h3>',
	orario : `
        <tr>
            <th> 08:05 - 08:50 </th>
            <th class="geo"> Geografia - C131 </th>
            <th class="stor"> Storia - B132 </th>
            <th class="pause"> </th>
            <th class="mate"> Matematica - C142</th>
            <th class="ingle"> Inglese - D171</th>
        </tr>

        <tr>
            <th class="hour"> 08:55 - 09:40 </th>
            <th class="geo"> Geografia </th>
            <th class="stor"> Storia </th>
            <th class="pause"> </th>
            <th class="mate"> Matematica </th>
            <th class="ingle"> Inglese</th>
        </tr>

        <tr>
            <th class="hour"> 09:55 - 10:40 </th>
            <th class="geo"> Geografia </th>
            <th class="ginna"> Ginna </th>
            <th class="oc"> Oc - ? </th>
            <th class="os"> Os - B125 </th>
            <th class="mate"> Matematica - C141</th>
        </tr>

        <tr>
            <th class="hour"> 10:45 - 11:30 </th>
            <th class="pause"> </th>
            <th class="ginna"> Ginna </th>
            <th class="oc"> Oc </th>
            <th class="os"> Os </th>
            <th class="mate"> Matematica </th>
        </tr>

        <tr>
            <th class="hour"> 11:35 - 12:20 </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>
        
        <tr>
            <th class="hour"> 12:20 - 13:05 </th>
            <th class="pause"> </th>
            <th class="bio"> Biologia - B25 </th>
            <th class="bio"> Biologia - B25</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>

        <tr>
            <th class="hour"> 13:10 - 13:55 </th>
            <th class="ita"> Italiano - C141 </th>
            <th class="os"> Os - B124</th>
            <th class="fisica"> Fisica - D73</th>
            <th class="fra"> Francese - B121</th>
            <th class="bio"> Biologia - B25</th>
        </tr>

        <tr>
            <th class="hour"> 14:00 - 14:45 </th>
            <th class="ita"> Italiano </th>
            <th class="os"> Os </th>
            <th class="fisica"> Fisica </th>
            <th class="fra"> Francese </th>
            <th class="bio"> Biologia </th>
        </tr>

        <tr>
            <th class="hour"> 14:55 - 15:40 </th>
            <th class="orcl"> OrCl - D172</th>
            <th class="lam"> Lam - D169 </th>
            <th class="filo"> Filosofia - B24</th>
            <th class="ita"> Italiano - D162</th>
            <th class="fra"> Francese - B121</th>
        </tr>

        <tr>
            <th class="hour"> 15:45 - 16:30 </th>
            <th class="ingle"> Inglese - D172</th>
            <th class="lam"> Lam </th>
            <th class="filo"> Filosofia </th>
            <th class="ita"> Italiano</th>
            <th class="fisica"> Fisica - D73 </th>
        </tr>

        <tr>
            <th class="hour"> 16:35 - 17:20</th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
            <th class="pause"> </th>
        </tr>
	`,
	classe : "3C"
};
profileData["Luigi"] = {
	nome : "Luigi",
	indirizzo : '<a href="https://goo.gl/maps/1QbxShN3fs51G3n99">Via Lugano 22, 6500 Bellinzona</a>',
	orario : `
        <tr>
            <th class="hour"> 08:05 - 08:50 </th>
            <th class="fisica"> Fisica - D72</th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 08:55 - 09:40 </th>
            <th class="fisica"> Fisica </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 09:55 - 10:40 </th>
            <th class="pause"> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 10:45 - 11:30 </th>
            <th class="mate"> Matematica - D62 </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 11:35 - 12:20 </th>
            <th class="pause"> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>
        
        <tr>
            <th class="hour"> 12:20 - 13:05 </th>
            <th class="pause"> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 13:10 - 13:55 </th>
            <th class="filo"> Filosofia - B124</th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 14:00 - 14:45 </th>
            <th class="filo"> Filosofia </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 14:55 - 15:40 </th>
            <th class="pause"> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 15:45 - 16:30 </th>
            <th class="pause"> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>

        <tr>
            <th class="hour"> 16:35 - 17:20</th>
            <th class="pause"> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
        </tr>
	`,
	classe : "3?"
};

if (!Object.keys(profileData).includes(profile))
	location.href = '404'


let casella_nome = document.getElementById("casella_nome");
casella_nome.innerHTML = profileData[profile].nome;

let casella_indirizzo = document.getElementById("casella_indirizzo");
casella_indirizzo.innerHTML += profileData[profile].indirizzo;

let casella_classe = document.getElementById("casella_classe");
casella_classe.innerHTML = profileData[profile].classe;

let casella_orario = document.getElementById("casella_orario");
casella_orario.innerHTML += profileData[profile].orario;
