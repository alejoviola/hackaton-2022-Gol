import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';
import { ABI } from '../../constants/abi';

export const useFilterMatches = (filter) => {
    const { data, isError, isLoading } = useContractRead({
        address: '0x29403A5Ce562879e08C22b814F5C1Bd8C0a4dC70',
        abi: ABI,
        functionName: 'getAllMatches',
    });

    const [dataFiltered, setDataFiltered] = useState([]);

    useEffect(() => {
        if (data) {
            switch (filter) {
                case 'PENDING':
                    data.map((value) => {
                        if (value.matchStatus === 0) {
                            dataFiltered.push(value);
                        }
                    });
                    break;

                case 'ACCEPTED':
                    data.map((value) => {
                        if (value.matchStatus === 1) {
                            dataFiltered.push(value);
                        }
                    });
                    break;

                case 'STARTED':
                    data.map((value) => {
                        if (value.matchStatus === 2) {
                            dataFiltered.push(value);
                        }
                    });
                    break;

                case 'ENDED':
                    data.map((value) => {
                        if (value.matchStatus === 3) {
                            dataFiltered.push(value);
                        }
                    });
                    break;

                default:
                    break;
            }
        }
    }, []);

    return { dataFiltered };
};
