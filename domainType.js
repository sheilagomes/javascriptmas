function domainType(domains) {
    const labels = ["commercial", "organization", "network", "information"];
    const finalResult = [];
    for (let i = 0; i < domains.length; i++) {
        let tld = domains[i].split['.'];
        for (let j = 0; j < labels.length; j++) {
            if (tld[tld.length-1] === labels[j].slice(0,3)) {
                finalResult.push(labels[j]);
            }
        }
    }
    return finalResult;
}