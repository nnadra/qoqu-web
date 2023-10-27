        const city = 1204;
        const date = new Date();
        const dd = String(date.getData()).padStart(2, '-');
        const mm = String(date.getMonth() + 1).padStart(2, '-');
        const yyyy =date.getFullYear();
        const now = yyy + '-' + mm + '-' + dd;

        const number = 1;

        const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`

  
